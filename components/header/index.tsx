import { Image, StatusBar, StyleSheet, Text, View } from "react-native"

import { Logo } from "../../assets"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import tw from 'twrnc'

const Header = () => {
  return (
    <View style={[tw`bg-transparent px-5 flex flex-row items-center justify-between`]}>
        <View>
            <Image source={Logo} style={tw`w-10 h-10 `}  />
        </View>
        <Text>Bentilzone</Text>
        <View style = {tw`flex flex-row items-center bg-[#FE8C00] px-2 py-1 rounded-full`}>
          <MaterialCommunityIcons name="cart-heart" style={tw`text-5 mr-1 text-white`}  />
            <Text style={tw`text-4 text-white`}>0</Text>
        </View>
    </View> 
  )
}

const styles = StyleSheet.create({
    Custom: {
        paddingTop: StatusBar.currentHeight,
    }
})

export default Header