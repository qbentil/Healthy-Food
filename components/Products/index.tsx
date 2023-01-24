import { FlatList, Text, View } from 'react-native'

import Item from './item'
import { ProductsData } from '../../utils'
import React from 'react'
import SectionHeader from '../sectionheader'
import tw from '../../lib/tw'

const Products = () => {
  return (
    <View style={[tw`w-[95%]`, { flex: 1 }]}>
      <SectionHeader title="Featured products" />
      {/* create flatlist with 2 items on a row */}
      <View style={[tw`h-full `, { flex: 1 }]}>
        <FlatList
          data={ProductsData}
          renderItem={({ item }) => <Item data={item} />}
          key={'#'}
          keyExtractor={item => "#" + item.id}
          numColumns={2}
          columnWrapperStyle={tw`justify-between`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Products