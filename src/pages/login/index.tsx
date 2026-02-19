import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { style } from "./style";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { colors } from "../../themes/colors";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<any>();
  
  const [email, setEmail] = useState("a");
  const [password, setPassword] = useState("a");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    setLoading(true);

    try {
      if (!email || !password) {
        setLoading(false);
        return Alert.alert("Digite o Email ou a Senha");
      }

      console.log("LOGOU!!!");
      
      navigation.reset({routes:[{name:"BottomRoutes"}]});
      
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image style={style.logo} source={Logo} resizeMode="contain" />
        <Text style={style.text}>Bem vindo de Volta</Text>
      </View>
      <View style={style.boxMid}>
        <Input
          onChangeText={setEmail}
          value={email}
          title="EMAIL"
          iconNameRight="email"
          IconRight={MaterialIcons}
        />
        <Input
          onChangeText={setPassword}
          value={password}
          title="PASSWORD"
          IconRight={Octicons}
          iconNameRight={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={style.boxBottom}>
        <Button text="ENTRAR" loading={loading} onPress={getLogin} />
      </View>
      <Text style={style.textBotton}>Não tem conta?</Text>
      <Text style={{ color: colors.primary }}> Crie agora!</Text>
    </View>
  );
}
