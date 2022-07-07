import { Image, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import tw from 'twrnc'

const   CategoryItem = () => {
  return (
    <View style={tw`flex items-center justify-center`}>
        <View style={tw`w-18 h-24 bg-white rounded-lg mb-1 flex items-center justify-center`}>
          <MaterialCommunityIcons name="food-turkey" style={tw`text-4xl`} />
        </View>
        <Text>Chicken</Text>
        
    </View>
  )
}

export default CategoryItem

