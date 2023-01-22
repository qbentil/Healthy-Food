import { Text, SafeAreaView, View } from 'react-native'
import { Categories, Products, Searchbar, Showcase } from '../../components'
import tw from '../../lib/tw'
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white w-full h-full flex items-center`}>
      <Searchbar />
      <Showcase />
      <Categories />
      <Products />
    </SafeAreaView>
  )
}

export default HomeScreen