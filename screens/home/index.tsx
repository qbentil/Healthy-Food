import { Categories, Products, Searchbar, Showcase, } from '../../components'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { BottomTabs } from '../../components'
import tw from '../../lib/tw'

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white w-full h-[120%] flex items-center justify-center`, { flex: 1 }]}>
      <Searchbar />
      <ScrollView style={[tw`w-full`, { flex: 1 }]}
        contentContainerStyle={[tw`flex items-center justify-center`]}
        showsVerticalScrollIndicator={false}
      >
        <Showcase />
        <Categories />
        <Products />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  )
}

export default HomeScreen