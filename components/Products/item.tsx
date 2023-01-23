import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'
import { Product } from '../../types'

interface Props {
    data: Product
}

const Item = ({ data }: Props) => {
    const { title, price, image, rating, category, quantity, description, unit } = data
    return (
        <View style={tw`w-1/2 h-3/5 flex items-center justify-center relative`}>
            <View style={tw`w-18 rounded-full bg-[#E6F2EA]  flex items-center justify-center mb-4`}>
            </View>
            <Image source={image} style={tw``} />
            <Text style={tw`text-sm text-primary my-2`}>${price}</Text>
            <Text style={tw`text-dark text-[0.8rem]`}>{title}</Text>
            <Text style={tw`text-gray-400 text-[0.8rem]`}>{unit}</Text>
        </View>
    )
}

export default Item