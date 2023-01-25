import { Text, TouchableOpacity, View } from 'react-native'

import { Entypo } from '@expo/vector-icons';
import React from 'react'
import tw from '../../lib/tw'

interface Props {
    title: String,
    onPress?: () => void
}
const SectionHeader = ({title, onPress}:Props) => {
  return (
    <View style={tw`w-full bg-white flex flex-row items-center justify-between text-dark mb-2`}>
      <Text style={tw`text-xl font-bold `}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Entypo name="chevron-right" style={tw`text-2xl text-primary-dark`} />
        </TouchableOpacity>
    </View>
  )
}

export default SectionHeader