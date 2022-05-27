import { View, Text, TouchableOpacity, Image } from 'react-native'
import {COLORS, SIZES, FONTS, SHADOWS} from '../constants';
import React from 'react'

export const CircleButton = ({imgUrl, handlePess, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width:40, 
        height:40,
        backgroundColor:COLORS.white,
        position:'absolute', 
        borderRadius:SIZES.extraLarge,
        alignItems:'center',
        justifyContent:'center',
        ...SHADOWS.light,
        ...props
      }}
      onPress={handlePess}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{width:24, height:24}}
      />
    </TouchableOpacity>
  )
}

export const RectButton = () => {
    return (
        <View>
            <Text>Rect Button</Text>
        </View>
    )
}
