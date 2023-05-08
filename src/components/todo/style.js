import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles=StyleSheet.create({
    todoWrapper:{
        padding:20,
        borderBottomWidth:1,
        borderBottomColor: colors.textSecondary,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title:{
        fontWeight:'bold',
        color: colors.textPrimary,
        fontSize: 25
    },
    completedTitle:{
        color:colors.danger,
        textDecorationLine: 'line-through'
    },
    date:{
        color:colors.textPrimary,
        marginTop: 10
    },
    textWrapper:{
        flex:1
    },
    iconsWrapper:{
        flexDirection: 'row',
        gap: 10
    }
})

export default styles