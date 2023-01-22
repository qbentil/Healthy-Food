import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'
import { Category } from '../../types'

interface Props {
  data: Category
}
const Item = ({data}:Props) => {
    const {title, icon, color} = data
  return (
    <TouchableOpacity activeOpacity={0.7} style={tw`flex items-center justify-center mx-1`}>
      <View style={tw`w-14 h-14 rounded-full bg-[${color}] flex items-center justify-center mb-4`}>
        <Image source={icon} style={tw`w-8 h-8`} />
      </View>
      <Text style={tw`text-dark text-[0.8rem]`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Item