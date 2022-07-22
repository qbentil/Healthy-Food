import { Friedrice, Icecream } from '../../assets'
import { Image, Text, View } from 'react-native'

import { FoodItemType } from '../../types'
import React from 'react'
import tw from 'twrnc'

interface Props {
  item: FoodItemType
}

const FoodItem = ({item}:Props) => {
  return (
    <View style={tw`px-2`}>
      <View style={tw`h-64 bg-white w-38 rounded-xl relative flex items-center mt-8 px-3`}>
        <View style={tw`absolute w-40 h-40 bg-white shadow-lg rounded-full -top-10 flex items-center justify-center`}>
            <Image source={Icecream} style = {tw`w-[90%] h-[90%] mr-1 `} />
        </View>
        <View style={tw`absolute top-30 flex items-center py-2`}>
          <Text style={tw`text-black font-bold text-base my-2`}>{item.name}</Text>
          <Text style={tw` text-sm mb-2 text-cartNumBg`}>{item.description}</Text>
          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`text-[#e80013] font-bold text-xl`}>81</Text>
            <Text style={tw`text-black font-bold text-[12px] mx-1`}>Calories</Text>
          </View>
          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`text-[#000] font-bold text-sm`}>₵</Text>
            <Text style={tw`text-[#e80013] font-bold text-xl`}>360</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FoodItem