import { Text, View, ScrollView } from 'react-native'

import React from 'react'
import SectionHeader from '../header'
import FoodItem from '../../fooditem'
import tw from 'twrnc'
interface SectionProps {
    category: string
}
const MenuSection = ({category}: SectionProps) => {
  return (
    <View>
      <SectionHeader title={`See our ${category}` } navText={`See more ${category}`} />
      <ScrollView horizontal showsHorizontalScrollIndicator = {false} style={tw``}>
      <FoodItem />
      <FoodItem />
      <FoodItem />
      </ScrollView>
    </View>
  )
}

export default MenuSection