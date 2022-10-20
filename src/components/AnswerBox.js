/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'

const AnswerBox = ({answer}) => {
  return (
    <View style={{marginVertical:10,flexDirection:'row',backgroundColor:'#11CBF0',justifyContent:'center',padding:5}}>
      <Text style={{color:'#000',fontSize:11,letterSpacing:1}}>{answer}</Text>
    </View>
  )
}

export default AnswerBox