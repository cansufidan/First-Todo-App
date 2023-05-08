import { StyleSheet } from "react-native";

import { colors } from "../../utils/constants";

const styles=StyleSheet.create({
    modalContainer:{
        flex:1,
        backgroundColor:colors.modalBg,
        justifyContent:'center',
        alignItems:'center'
    },
    modalContentWrapper:{
        width:'80%',
        backgroundColor:colors.white,
        padding:20,
        borderRadius:4
    },
    title:{
        color:colors.textPrimary,
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center'
    },
    buttonsWrapper:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        gap:10
    },
    closeButtonWrapper:{
        borderWidth:1,
        borderColor:colors.textPrimary,
        paddingVertical:6,
        paddingHorizontal:30
    },
    closeButtonText:{
        color:colors.textPrimary
    },
    confirmButtonWrapper:{
        borderWidth:1,
        borderColor:colors.textPrimary,
        paddingVertical:6,
        paddingHorizontal:30,
        backgroundColor:colors.textPrimary
    },
    confirmButtonText:{
        color:colors.white
    },
    validationText:{
        color:colors.danger,
        textAlign:'center'
    }
})

export default styles