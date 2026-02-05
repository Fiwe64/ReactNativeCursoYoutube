import React, { forwardRef,LegacyRef } from "react";
import { View, TextInput,Text, TextInputProps } from "react-native";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { style } from "./style";
import { colors } from "../../themes/colors";

/** * 1. DEFINIÇÃO DO TIPO DE ÍCONE (A "POLIMORFISMO" DOS ÍCONES)
 * Aqui criamos um tipo que aceita componentes de diferentes bibliotecas.
 * Dizemos ao TS: "Aceite qualquer componente que tenha as propriedades (props) 
 * originais do MaterialIcons, FontAwesome OU Octicons".
 */
type IconComponent =  React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                      React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                      React.ComponentType<React.ComponentProps<typeof Octicons>>;


 /*** 2. DEFINIÇÃO DAS PROPS (O "CONTRATO" DO COMPONENTE)
 * O '&' faz uma "Herança" (Intersection Type): 
 * Ele pega TUDO que um TextInput comum já tem e adiciona nossas customizações abaixo.
 */
type Props = TextInputProps & {

  // Componentes de ícone opcionais
  IconLeft ?: IconComponent,
  IconRight ?: IconComponent,

  // Nomes dos ícones (strings) que as bibliotecas usam (ex: "email", "search")
  iconNameLeft?: string,
  iconNameRight?: string,
  title?: string,

  // "Callbacks" de clique (como o OnClickListener do Java)
  iconLeftPress ?: () => void,
  iconRightPress ?: () => void
} 

export const Input = forwardRef<TextInput,Props>((props,ref) => {
  const { title, IconLeft, iconNameLeft, ...rest } = props;
  return (
    <>
    <Text style= {style.titleInput}>{title ||"ENDEREÇO E-MAIL"}</Text>
    <View>
      <View style={style.BoxInput}>
        {IconLeft && iconNameLeft && (
          <IconLeft name={iconNameLeft as any} size={20} color={colors.gray}/>
        )}
        <TextInput style={style.input} />
        <MaterialIcons name="email" size={20} color={colors.gray} />
      </View>
    </View>
    </>
  );
});
