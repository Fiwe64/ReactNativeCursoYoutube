import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const style = StyleSheet.create({
    button:{
    width:250,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.primary,
    borderRadius:40,

    //sombra
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,


  },
  textButton:{
    fontSize:16,
    color:"white",
    fontWeight:"bold",
  },
});


