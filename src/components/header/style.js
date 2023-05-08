import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles=StyleSheet.create({
    headerWrapper:{
        width:"100%",
        height:50,
        backgroundColor: colors.bgPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.textSecondary
    }
})

export default styles