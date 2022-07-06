import {} from '@expo/vector-icons'

import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { Logo } from "../../assets"
import tw from 'twrnc'

const Header = () => {
  return (
    <View style={[tw`bg-transparent flex flex-row items-center justify-between`]}>
      <TouchableOpacity activeOpacity={0.7}>
        <AntDesign name="menufold" style={tw`text-2xl`} />
      </TouchableOpacity>
        <View style={tw`flex flex-row items-center `}>
            <Image source={Logo} style={tw`w-10 h-10 `}  />
            <Text style={tw`text-xl  font-bold`}>Bentilzone</Text>
        </View>
        <View style = {tw`flex flex-row items-center bg-[#e80013] px-2 py-1 rounded-full`}>
          {/* <FontAwesome5 name="shopping-basket" style={tw`text-5 mr-1 text-white`}  /> */}
          <Ionicons name="basket" style={tw`text-5 mr-1 text-white`}  />
            <Text style={tw`text-white text-4 `}>0</Text>
        </View>
    </View> 
  )
}
  

export default Header