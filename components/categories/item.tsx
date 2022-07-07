import { Image, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import tw from 'twrnc'

const   CategoryItem = () => {
  return (
    <View style={tw`flex items-center justify-center mx-2`}>
        <View style={tw`w-18 h-20 bg-white rounded-lg flex items-center justify-center`}>
          <View style = {tw`w-10 h-10 bg-[#e80013] rounded-full flex items-center justify-center mb-1`}>
            <MaterialCommunityIcons name="food-turkey" style={tw`text-3xl text-white`} />
          </View>
          <Text style={tw`text-sm`}>Chicken</Text>
        </View>
        
    </View>
  )
}

export default CategoryItem

