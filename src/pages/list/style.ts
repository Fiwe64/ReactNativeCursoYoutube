import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../themes/colors";


export const style = StyleSheet.create({
    container: {
    flex: 1,
  //justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    width:"100%",
    height:Dimensions.get('window').height/6,
    backgroundColor: colors.primary,
    justifyContent: "center",
    paddingHorizontal:20,
    

  },
  greeting:{
    fontSize:20,
    color: '#FFF',
    marginTop:20,
  },
  boxInput:{
    width:"80%"
  },
  boxList:{
    flex:1,
    width:"100%",
    paddingVertical: 20,

  },
  emptyBox:{
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
  },
  emptySubText:{
    fontSize: 14,
    color: "#AAA",
    marginTop: 8,

  }
})