import { Text, View } from 'react-native'

import React from 'react'
import SectionHeader from '../header'
import FoodItem from '../../fooditem'

interface SectionProps {
    category: string
}
const MenuSection = ({category}: SectionProps) => {
  return (
    <View>
      <SectionHeader title={`See our ${category}` } navText={`See more ${category}`} />

      <FoodItem />
    </View>
  )
}

export default MenuSection