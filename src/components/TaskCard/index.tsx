import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import  Task  from '../../contexts/TaskContext';
import { style } from './style';

interface TaskCardProps {
    data: Task;
}

export function TaskCard({ data } : TaskCardProps){
    const isUrgent = data.flag === 'urgente';
    const flagColor = isUrgent ? '#FF4C4C' : '#4C9AFF';

    return(
        <TouchableOpacity style={[style.cardContainer, {borderLeftColor: flagColor}]}>
            {/* Lado Esquerdo : Textos */}
            <View style={style.content}>
                <Text style={style.title}>{data.title}</Text>
                <Text style={style.description} numberOfLines={2}>{data.description}</Text>
                <Text style={style.time}> {data.timeLimit}</Text>
            </View>
            {/*Lado Direito : a Flag bolinha + texto */}
            <View style={style.flagBox}>
                <View style={[style.ball,{backgroundColor: flagColor}]}/>
                <Text style={[style.flagText, {color: flagColor}]}>
                    {data.flag.toUpperCase()}
                </Text>
            </View>
        </TouchableOpacity>
    );
}