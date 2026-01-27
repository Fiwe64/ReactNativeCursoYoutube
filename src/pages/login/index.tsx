import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { style } from "./style";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../themes/colors";

const Login = () => {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image style={style.logo} source={Logo} resizeMode="contain" />
        <Text style={style.text}>Bem vindo de Volta</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Endereço de Email</Text>
        <Text style={style.titleInput}>Senha</Text>
        <View style={style.BoxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={20} color={colors.gray} />
        </View>
      </View>
      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
