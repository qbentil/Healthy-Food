import { Categories, Products, Searchbar, Showcase, } from '../../components'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

import tw from '../../lib/tw'

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-bg-a w-full h-full flex items-center justify-center`, { flex: 1 }]}>
      <Searchbar />
      <ScrollView style={[tw`w-full`, { flex: 1 }]}
        contentContainerStyle={[tw`flex items-center justify-center`]}
        showsVerticalScrollIndicator={false}
      >
        <Showcase />
        <Categories />
        <Products />
      </ScrollView>
      <View style={[tw`w-full h-20 bg-white`, { flex: 0.1 }]}>
        <Text>
          Bottom Tab Navigator here
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen