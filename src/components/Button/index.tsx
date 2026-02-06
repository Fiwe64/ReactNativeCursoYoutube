import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { style } from './style'

type Props = TouchableHighlightProps & {
    text:string,
    loading?:boolean,
}

export default function Button({...rest}:Props){
    return (
        <TouchableOpacity 
        style={style.button}
        {...rest}
        activeOpacity={0.6}
        >
            {rest.loading?<ActivityIndicator/> :<Text style={style.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
    
}