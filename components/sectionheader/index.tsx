import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import tw from '../../lib/tw'
interface Props {
    title: String,
    onPress?: () => void
}
const SectionHeader = ({title, onPress}:Props) => {
  return (
    <View style={tw`w-full flex flex-row items-center justify-between text-dark mb-2`}>
      <Text style={tw`text-xl font-bold `}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Entypo name="chevron-right" style={tw`text-2xl text-primary-dark`} />
        </TouchableOpacity>
    </View>
  )
}

export default SectionHeader