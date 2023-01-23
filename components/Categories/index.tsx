import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SectionHeader from '../sectionheader'
import tw from '../../lib/tw'
import Item from './item'
import { CategoriesData } from '../../utils'
const Categories = () => {
  return (
    <View style={tw`w-[95%]`}>
      <SectionHeader title="Categories" />
      {/* horizontal flatlist of categories*/}
      <View style={tw`my-2`}>
        <FlatList
          data={CategoriesData}
          renderItem={({ item }) => <Item data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Categories