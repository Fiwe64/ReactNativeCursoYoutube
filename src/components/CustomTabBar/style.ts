import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const style = StyleSheet.create({
    tabArea:{
        flexDirection:"row",
        height:80,
        justifyContent:"space-around",
    },
    tabItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    tabItemButtom:{
        width:70,
        height:70,
        borderRadius:35,
        alignItems:"center",
        justifyContent:"center",
        zIndex:9999,
        backgroundColor:colors.primary,
        top:-30

    }
});


