import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'
import SectionHeader from '../sectionheader'
import { ProductsData } from '../../utils'
import Item from './item'
const Products = () => {
  return (
    <View style={tw`w-[95%]`}>
        <SectionHeader title="Featured products" />
        {/* create flatlist with 2 items on a row */}
        <View style={tw`flex`}>
        <FlatList
            data={ProductsData}
            renderItem={({item}) => <Item data={item} />}
            key={'#'}
            keyExtractor={item => "#" + item.id}         
            numColumns={2}
        />
        </View>
    </View>
  )
}

export default Products