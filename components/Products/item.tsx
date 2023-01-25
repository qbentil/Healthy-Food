import { Image, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../types'
import React from 'react'
import tw from '../../lib/tw'

interface Props {
    data: Product
}

const Item = ({ data }: Props) => {
    const { title, price, image, rating, category, quantity, description, unit } = data
    return (
        <View style={tw`bg-white pt-2 rounded w-1/2 my-2 mx-1 flex items-center justify-center relative`}>
            <View style={tw`w-20 h-20 rounded-full bg-[#E6F2EA]  flex items-center justify-center`}>
            </View>
            <Image source={image} style={tw`absolute top-5`} />
            <View style={tw`flex items-center justify-center mt-5`}>
                <Text style={tw`text-sm text-primary-dark font-bold`}>${price}</Text>
                <Text style={tw`text-sm font-bold`}>{title}</Text>
                <Text style={tw`text-sm  font-bold text-dark`}>{unit}</Text>
            </View>
            <View style={tw`border-t border-grey py-2 my-2 flex items-center flex-row justify-center w-full`}>
            <Ionicons name="basket-outline" style={tw`mr-2 text-base text-primary-dark`} />
                <Text style={tw`font-bold text-base`}>Add to Cart</Text>
            </View>
        </View>
    )
}

export default Item