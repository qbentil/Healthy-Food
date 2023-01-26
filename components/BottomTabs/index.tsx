import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'
import { AntDesign, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
const BottomTabs = () => {
    return (
        <View style={tw`w-full h-20 flex flex-row items-center justify-evenly`}>
            <View style={tw``}>
                <SimpleLineIcons name="home" style={tw`text-4xl`} />
            </View>
            <View style={tw``}>
                <EvilIcons name="user" style={tw`text-4xl`} />
            </View>
            <View style={tw``}>
            <EvilIcons name="heart" style={tw`text-4xl`} />
            </View>
            <View style={tw``}>
                <AntDesign name="home"  style={tw`text-4xl`} />
            </View>
        </View>
    )
}

export default BottomTabs