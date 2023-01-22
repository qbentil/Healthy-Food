import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'
import { Ionicons } from '@expo/vector-icons';
import Input from '../Input';
const Searchbar = () => {
    return (
        <View style={tw`w-[95%] bg-bg-a shadow rounded-lg px-3`}>
            <View style={tw`flex flex-row items-center justify-around p-2 `}>
                <View style={tw`flex flex-row items-center`}>
                    <Ionicons name="search" style={tw`text-dark text-xl`} />
                </View>
                <Input 
                    placeholder="Search keywords...."
                    style={` text-white `}
                    onChange={() => null}
                    value=''
                />
                <View style={tw`flex flex-row items-center`}>
                    <Ionicons name="filter-outline" style={tw`text-dark text-xl`} />
                </View>
            </View>
        </View>
    )
}

export default Searchbar