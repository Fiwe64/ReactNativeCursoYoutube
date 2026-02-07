import React, { forwardRef, LegacyRef } from "react";
import { View, TextInput, Text, TextInputProps, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { style } from "./style";
import { colors } from "../../themes/colors";

/** * 1. DEFINIÇÃO DO TIPO DE ÍCONE (A "POLIMORFISMO" DOS ÍCONES)
 * Aqui criamos um tipo que aceita componentes de diferentes bibliotecas.
 * Dizemos ao TS: "Aceite qualquer componente que tenha as propriedades (props)
 * originais do MaterialIcons, FontAwesome OU Octicons".
 */
type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof Octicons>>;

/*** 2. DEFINIÇÃO DAS PROPS (O "CONTRATO" DO COMPONENTE)
 * O '&' faz uma "Herança" (Intersection Type):
 * Ele pega TUDO que um TextInput comum já tem e adiciona nossas customizações abaixo.
 */
type Props = TextInputProps & {
  // Componentes de ícone opcionais
  IconLeft?: IconComponent;
  IconRight?: IconComponent;

  // Nomes dos ícones (strings) que as bibliotecas usam (ex: "email", "search")
  iconNameLeft?: string;
  iconNameRight?: string;
  title?: string;

  //  "Callbacks" de clique (como o OnClickListener do Java)
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};

  

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { 
    title, 
    IconLeft,
    IconRight, 
    iconNameLeft,
    iconNameRight,
    onIconLeftPress,
    onIconRightPress, 
    ...rest
   } = props;
  const calcularTamanhoDoWidth = () => {
  if (IconLeft && IconRight){
    return '80%'
  }
  else if(IconLeft || IconRight){
    return '90%'
  }else{
    return '100%'
  }
}
const calcularTamanhoDoPadding = () => {
  if (IconLeft && IconRight){
    return 10;
  }
  else if(IconLeft || IconRight){
    return 10;
  }else{
    return 20;
  }
}
  return (
    <>
     {title&&<Text style={style.titleInput}>{title}</Text>}
      <View>
        <View style={[style.BoxInput,{paddingLeft:calcularTamanhoDoPadding()}]}>
          {IconLeft && iconNameLeft && (
            <TouchableOpacity onPress={onIconLeftPress} style={style.button}>
            <IconLeft name={iconNameLeft as any} size={20} color={colors.gray} style={style.icon}/>
          </TouchableOpacity>
          )}
          
          {/* text input tendo o width alterado conforme a inclusao de icones atraves da funcao calcularTamanhoDoWidth */}
          <TextInput 
                    style={[
                      style.input,{width:calcularTamanhoDoWidth()}]}
                      ref={ref}
                    {...rest}
           />
          {IconRight && iconNameRight && (
            <TouchableOpacity onPress={onIconRightPress}>
            <IconRight name={iconNameRight as any} size={20} color={colors.gray} style={style.icon}/>
          </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
});
