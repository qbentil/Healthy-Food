import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'
import SectionHeader from '../sectionheader'
const Products = () => {
  return (
    <View style={tw`w-[95%]`}>
        <SectionHeader title="Featured products" />
      <Text>Products</Text>
    </View>
  )
}

export default Products