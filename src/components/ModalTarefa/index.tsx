import { Modal, Platform, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView, Alert, ScrollView } from 'react-native'
import React, { Component, useState } from 'react'
import { useTaskContext } from '../../contexts/TaskContext'
import { style } from './style';
import { Octicons } from '@expo/vector-icons';
import { colors } from '../../themes/colors';

export function ModalTarefas(){
    const {isModalOpen,closeModal,createTask} = useTaskContext();
    
    /// Estados para o campo do formulário

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [flag,setFlag] = useState<"urgente" |"opcional">("opcional");
    const [timeLimit,setTimeLimit] = useState("");
    
    //funçao para Salvar

    function handleSave(){
        if(!title.trim()){
            return Alert.alert("Ops, Bota um Titulo ai filhão");
        }

        //chama a função do contexto para salvar
        createTask({
            title,
            description,
            timeLimit,
            flag,
        });

        setTitle("");
        setDescription("");
        setFlag("opcional");
        setTimeLimit("");

    }
    
    return(
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalOpen}
        onRequestClose={closeModal}
      >
        <View style={style.overlay}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={style.container}
            >
                <View style={style.header}>
                    <Text style={style.title}>Criar Tarefa</Text>
                    <TouchableOpacity onPress={closeModal}>
                        {/* <Text style={style.closeBtn}>Cancelar</Text> */}
                        <Octicons name='x' size={30} color={colors.gray ||'#333'}/>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
                    {/* input de titulo */}
                    <Text style={style.label}>Título</Text>
                    <TextInput
                        style={style.input}
                        placeholder='Ex: Estudar para a Prova'
                        value={title}
                        onChangeText={setTitle}
                    />
                {/* input de Descrição */}
                <Text style={style.label}></Text>
                        <TextInput
                            style={[style.input,{height:100,textAlignVertical: 'top'}]}
                            placeholder='Ex: Estudar para a Prova'
                            value={description}
                            onChangeText={setDescription}
                        />
                {/* Input Tempo Limite */}
                <Text style={style.label}>Data/Hora Limite</Text>
                        <TextInput
                            style={style.input}
                            placeholder='Ex: 10/10 às 14h'
                            value={timeLimit}
                            onChangeText={setTimeLimit}
                        />
                {/* Seleção de Flags */}

                <Text style={style.label}>Prioridade</Text>
                <View style={style.flagContainer}>
                    <TouchableOpacity
                        style={[style.flagButton,flag==='urgente' && style.flagSelected]}
                        onPress={()=> setFlag('urgente')}
                    >
                        <Text style={[style.flagText, flag === 'urgente' && {color: '#FFF'}]}>Urgente</Text>
                    </TouchableOpacity>

                </View>
                

                <Text style={style.label}>Opcional</Text>
                <View style={style.flagContainer}>
                    <TouchableOpacity
                        style={[style.flagButton,flag==='opcional' && style.flagSelected]}
                        onPress={()=> setFlag('opcional')}
                    >
                        <Text style={[style.flagText, flag === 'opcional' && {color: '#FFF'}]}>Opcional</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={style.saveButton} onPress={handleSave}>
                    <Text style={style.saveButtonText}>Salvar Tarefa</Text>
                </TouchableOpacity>
                </ScrollView>
              
                
            </KeyboardAvoidingView>
        </View>
      </Modal>
    )
}