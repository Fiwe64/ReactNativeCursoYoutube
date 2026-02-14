import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { style } from "./style";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={style.tabArea}>
        {/*Esquerdo*/}
      <TouchableOpacity style={style.tabItem}>
        <AntDesign 
            name="bars"
            style={{fontSize:32}}
        />
      </TouchableOpacity>
      {/*Centro */}
      <TouchableOpacity style={style.tabItemButtom}>
        <View>
            <Entypo
                name="plus"
                size={40}
            />
        </View>
        <View>
            <MaterialIcons
                name="edit"
                style={{color:"#000"}}
                size={30}
            />
        </View>
      </TouchableOpacity>
      {/*Direito */}
      <TouchableOpacity style={style.tabItem}>
        <FontAwesome
            name="user"
            style={{fontSize:32}}
        />
        
      </TouchableOpacity>
      `
    </View>
  );
}
