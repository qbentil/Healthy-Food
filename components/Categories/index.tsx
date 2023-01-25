import { FlatList, Text, View } from 'react-native'

import { CategoriesData } from '../../utils'
import Item from './item'
import React from 'react'
import SectionHeader from '../sectionheader'
import tw from '../../lib/tw'

const Categories = () => {
  return (
    <View style={tw`w-full bg-white px-2`}>
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