import { FlatList, ScrollView, Text, View } from 'react-native'

import CategoryItem from './item'
import Items from '../../utils/categories'
import tw from 'twrnc'

const Categories = () => {
  return (
    <ScrollView style={tw`flex flex-col`} horizontal>
      <FlatList
        data={Items}
        scrollEnabled={false}
        renderItem={({ item }) => <CategoryItem category={item} />}
        // keyExtractor={(item) => item.id}
      />
    </ScrollView>
  )
}

export default Categories