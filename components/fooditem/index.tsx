import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const FoodItem = () => {
  return (
    <View>
      <View style={tw`h-60 bg-white w-36 rounded-xl`}>
        <Text>Food Item</Text>
      </View>
    </View>
  )
}

export default FoodItem