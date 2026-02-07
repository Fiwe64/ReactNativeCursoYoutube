import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { style } from './style'

type Props = TouchableOpacityProps & {
    text:string,
    loading?:boolean,
}

export default function Button({text,loading,...rest}:Props){
    return (
        <TouchableOpacity 
        style={style.button}
        activeOpacity={0.6}
        {...rest}
        >
           {loading ? (
                <ActivityIndicator color="#FFF" /> 
            ) : (
                <Text style={style.textButton}>{text}</Text>
            )}
        </TouchableOpacity>
    )
    
}