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
    backgroundColor:'red',
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
   
  },
  logo :{
    width:80,
    height:80
  },
  text:{
    fontWeight:"bold",
    marginTop:40
  },
  titleInput:{
    marginLeft:5,
    color:colors.gray,
    marginTop:20,
  },
  BoxInput:{
    width:"100%",
    height:40,
    marginTop:10,
    borderWidth:1,
    flexDirection:"row",
  },
  input:{
    width:"100%",
    height:"100%"
  }
});
