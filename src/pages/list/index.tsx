import { Text, View } from 'react-native'
import React, {  } from 'react'
import {style} from "./style"
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function List (){
    const navigation = useNavigation<any>();
    return(
        <View style={style.container}>
            <Text>Ola Mundo</Text>
            <Button text='Voltar' onPress={()=>navigation.navigate('Login')}/>
        </View>
    );
}