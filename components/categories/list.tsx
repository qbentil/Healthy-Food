import { FlatList, ScrollView, Text, View } from 'react-native'

import CategoryItem from './item'
import Items from '../../utils/categories'

const CategoriesList = () => {
  return (
    <>
      {
        Items.map((item, index) => (
          <CategoryItem key={index} category={item} />
        ))
      }
    </>
  )
}

export default CategoriesList