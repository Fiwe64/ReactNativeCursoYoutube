import { Text, View } from 'react-native'
import React, {  } from 'react'
import {style} from "./style"
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { useTaskContext } from '../../contexts/TaskContext';
import { TaskCard } from '../../components/TaskCard';

export default function List (){
    const { tasks } = useTaskContext();

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
                    data={tasks}
                    keyExtractor={(item) => item.id} // a ID única gerada no contexto
                    contentContainerStyle={{paddingBottom: 100}} // Espaço pro CustomTabBar não cobrir o último item
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>(
                        <TaskCard data={item}/>
                    )}
                    ListEmptyComponent={() => (
                        <View style={style.emptyBox}>\
                            <Text style={style.emptyBox}>Nada por aqui Ainda!</Text>
                            <Text style={style.emptySubText}> Clique em "+" para adicionar uma Tarefa.</Text>
                        </View>
                    )}
                />
            </View>
            {/* <Button text='Voltar' onPress={()=>navigation.navigate('Login')}/> */}
        </View>
    );
}