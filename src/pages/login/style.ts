import { StyleSheet,Dimensions } from "react-native";
import {colors} from "../../themes/colors"


export const style = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  boxTop: {
    height:Dimensions.get('window').height/3,
    width:'100%',
    alignItems:'center',
    justifyContent: 'center',
  },
  boxMid: {
    height:Dimensions.get('window').height/4,
    width:'100%',
    paddingHorizontal:37,
  },
  boxBottom: {
    height:Dimensions.get('window').height/3,
    width:'100%',
   alignItems:"center",
   //justifyContent:"center",
  },
  logo :{
    width:80,
    height:80
  },
  text:{
    fontWeight:"bold",
    marginTop:40
  },
  
  
  
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
  textBotton:{
    fontSize:16,
    color:colors.gray,
    fontWeight:"bold",
  }
});
