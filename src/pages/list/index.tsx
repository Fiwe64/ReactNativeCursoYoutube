import { Text, View } from 'react-native'
import React, {  } from 'react'
import {style} from "./style"
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export default function List (){
    const navigation = useNavigation<any>();
    import {setTasks} from "../../contexts/TaskContext"
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia <Text style={{fontWeight:"bold"}}>Well</Text></Text>
                <View style={style.boxInput}>
                    <Input 
                    IconLeft={MaterialIcons}
                    iconNameLeft='search'
                    />
                </View>
            </View>

            <View style={style.boxList}>
                <FlatList
                    data={}
                />
            </View>
            {/* <Button text='Voltar' onPress={()=>navigation.navigate('Login')}/> */}
        </View>
    );
}