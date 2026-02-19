import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { style } from "./style";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";


//importando o Hook
import { useTaskContext } from "../../contexts/TaskContext";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { openModal } = useTaskContext();
  return (
    <View style={[
      style.tabArea,
      { paddingBottom: insets.bottom>0 ?insets.bottom : 10}
    ]}>
        {/*Esquerdo*/}
      <TouchableOpacity style={style.tabItem} onPress={()=> navigation.navigate("List")}>
        <AntDesign 
            name="bars"
            style={{fontSize:32,opacity:state.index===0?1:0.2}}

        />

      </TouchableOpacity>
      {/*Centro */}
      <TouchableOpacity style={style.tabItemButtom} onPress={()=> openModal()}>
        <View>
            <Entypo
                name="plus"
                size={50}
                color={"#ffff"}
            />
        </View>
      </TouchableOpacity>
      {/*Direito */}
      <TouchableOpacity style={style.tabItem} onPress={()=> navigation.navigate("User")}>
        <FontAwesome
            name="user"
            style={{fontSize:32,opacity:state.index===1?1:0.2}}
        />
        
      </TouchableOpacity>
      
    </View>
  );
}
