import { ScrollView, Text, View } from 'react-native'

import CategoryItem from './item'
import Items from '../../utils/categories'
import tw from 'twrnc'

const Categories = () => {
  return (
    <ScrollView style={tw`flex flex-col`} horizontal>
      <CategoryItem />
    </ScrollView>
  )
}

export default Categories