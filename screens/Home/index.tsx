import { SafeAreaView, Text } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import tw from 'twrnc'

interface Props {
  navigation?: Boolean
}

const HomeScreen:React.FC<Props> =({navigation}) => {
  return (
   <SafeAreaView style={tw`bg-[#FFB087]`}>
    <Header />
   </SafeAreaView>
  )
}

export default HomeScreen