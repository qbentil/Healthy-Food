import { Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FoodCategory } from '../../types'

const   CategoryItem = ({category}:{category:FoodCategory}) => {
  return (
    <View style={tw`flex items-center justify-center mx-2`}>
        <View style={tw`w-18 h-20 bg-white rounded-lg flex items-center justify-center`}>
          <View style = {tw`w-10 h-10 bg-[#e80013] rounded-full flex items-center justify-center mb-1`}>
            {category.icon}
          </View>
          <Text style={tw`text-sm`}>{category.name}</Text>
        </View>
        
    </View>
  )
}

export default CategoryItem

