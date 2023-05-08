/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import Header from './src/components/header';
import Input from './src/components/input';
import Todo from './src/components/todo';

import generalStyles from './src/utils/generalStyles';
import { colors } from './src/utils/constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [text, setText]= useState("");
  const [todos, setTodos]= useState([]);
  const addTodo=()=>{
    const newTodo={
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false
    }
    AsyncStorage.setItem("@todos",JSON.stringify([...todos, newTodo]))
    .then(()=>{
      setTodos([...todos, newTodo]);
    setText('');
    })
    .catch(err=>{
      Alert.alert("Hata","Kayıt esnasında bir hata oluştu")
    });
  };
  useEffect(()=>{
    AsyncStorage.getItem("@todos")
    .then(res=>{
      console.log(res);
      /*Eğer res null değilse demek ki AsyncStorage'da böyle bir kayıt var */
      if(res !== null){
        const parsedRes=JSON.parse(res)
        console.log("parsedRes",parsedRes);
        setTodos(parsedRes)
      }
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <SafeAreaView style={[generalStyles.flex1,generalStyles.bgWhite]}>
      <Header title='My Todo App'/>
      <Input value={text}
      onChangeText={(text)=>setText(text)}
      placeholder='deneme'
      hasIcon
      onIconPress={addTodo}
        />
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emptyText}>Henüz kayıtlı bir todo bulunmamaktadır</Text>
          ):(
          <ScrollView style={styles.ScrollView}>
            {
              todos?.map(todo=>(<Todo todos={todos} setTodos={setTodos} key={todo?.id} todo={todo}/>))
            }
          </ScrollView>
          )}
      </View>
      
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  todosWrapper:{
    flex:1,
    marginHorizontal: 20,
    marginVertical: 30
  },
  emptyText:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary
  },
  ScrollView:{
    flexGrow:1
  }
});

export default App;
