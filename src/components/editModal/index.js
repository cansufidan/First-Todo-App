import React from "react";

import { Modal, View, Text, TouchableOpacity } from "react-native"; 

import styles from "./style";

import Input from "../input";


const EditModal=({visible, closeModal, willEditText, setWillEditText, onConfirm, hasError, errorMessage})=>{
    return(
        <Modal visible={visible} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContentWrapper}>
                <Text style={styles.title}>Güncelle</Text>
                <Input value={willEditText}
                 onChangeText={(text)=>setWillEditText(text)}
                  placeholder="Güncellenecek texti yazın"
                  />
                  {
                    hasError && (
                        <Text style={styles.validationText}>{errorMessage}</Text>
                    )
    
                  }
                  <View style={styles.buttonsWrapper}>
                  <TouchableOpacity onPress={closeModal} style={styles.closeButtonWrapper}>
                    <Text style={styles.closeButtonText}>Kapat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onConfirm} style={styles.confirmButtonWrapper}>
                    <Text style={styles.confirmButtonText}>Onayla</Text>
                </TouchableOpacity>
                  </View>
               
                </View>
            </View>
        </Modal>
    )
}

export default EditModal