import { View, Text , Image} from 'react-native'
import React from 'react'
import tw from '../../lib/tw'

const Showcase = () => {
  return (
    <View style={tw`relative w-[95%] my-2 bg-primary-light`}>
        <Image source={require('../../assets/images/showcase.png')} style={tw`w-full`} />
      <View style={tw`absolute w-[40%] bottom-20 left-10`}>
      <Text style={tw`font-bold text-xl`}>20% off on your first purchase</Text>
      </View>
    </View>
  )
}

export default Showcase