import { Image, Text, View } from 'react-native'

import { Product } from '../../types'
import React from 'react'
import tw from '../../lib/tw'

interface Props {
    data: Product
}

const Item = ({ data }: Props) => {
    const { title, price, image, rating, category, quantity, description, unit } = data
    return (
        <View style={tw`w-1/2 my-2 mx-1 flex items-center justify-center relative`}>
            <View style={tw`w-20 h-20 rounded-full bg-[#E6F2EA]  flex items-center justify-center`}>
            </View>
            <Image source={image} style={tw`absolute top-5`} />
            <View style={tw`flex items-center justify-center mt-5`}>
                <Text style={tw`text-sm text-primary-dark font-bold`}>${price}</Text>
                <Text style={tw`text-sm font-bold`}>{title}</Text>
            </View>
        </View>
    )
}

export default Item