import { Text, View } from 'react-native'

import React from 'react'
import tw from 'twrnc'

interface Props {
  navigation?: Boolean
}

const ProfileScreen:React.FC<Props> =({navigation}) => {
  return (
    <View style = {tw`flex flex-1 items-center justify-center`}>
      <Text>Profile Screen</Text>
    </View>
  )
}

export default ProfileScreen