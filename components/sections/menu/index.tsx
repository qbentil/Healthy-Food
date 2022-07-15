import { Text, View } from 'react-native'

import React from 'react'
import SectionHeader from '../header'

interface SectionProps {
    category: string
}
const MenuSection = ({category}: SectionProps) => {
  return (
    <View>
      <SectionHeader title={`See our ${category}` } navText={`See more ${category}`} />
    </View>
  )
}

export default MenuSection