import { ScrollView, Text, View } from 'react-native'

import FoodItem from '../../fooditem'
import React from 'react'
import SectionHeader from '../header'
import tw from 'twrnc'

const Items = [
  {
    id: 2,
    category: 45,
    name: 'Pizza',
    imageURI: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    price: '10.00',
    description: 'Pizza is a savory dish of Italian origin'
  },
  {
    id: 2,
    category: 45,
    name: 'Pizza',
    imageURI: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    price: '10.00',
    description: 'Pizza is a savory dish of Italian origin'
  },
  {
    id: 2,
    category: 45,
    name: 'Pizza',
    imageURI: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    price: '10.00',
    description: 'Pizza is a savory dish of Italian origin'
  },
  {
    id: 2,
    category: 45,
    name: 'Pizza',
    imageURI: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    price: '10.00',
    description: 'Pizza is a savory '
  },
  {
    id: 2,
    category: 45,
    name: 'Pizza',
    imageURI: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    price: '10.00',
    description: 'Pizza is a savory '
  },
  
]
interface SectionProps {
    category: string
}
const MenuSection = ({category}: SectionProps) => {
  return (
    <View style={tw`pb-2`}>
      <SectionHeader title={`See our ${category}` } navText={`See more ${category}`} />
      <ScrollView horizontal showsHorizontalScrollIndicator = {false} style={tw`pt-4`}>
        {
          Items.map((item, index) => (
            <FoodItem key={index} item={item} />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default MenuSection