import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const style = StyleSheet.create({
    BoxInput: {
        width: "100%",
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 40,
    }, input: {
        width: "90%",
        height: "100%",

        borderRadius: 40,
    },
    titleInput:{
        marginLeft:5,
        color:colors.gray,
        marginTop:20,
      },
});


