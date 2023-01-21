import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'

interface Props {
    style?: string | any,
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad'
    autoFocus?: boolean,
    returnKeyLabel?: string,
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'
    secureTextEntry?: boolean

}
const Input = ({
    onChange, value, placeholder, keyboardType='default', style, autoFocus, returnKeyLabel, returnKeyType, secureTextEntry
}: Props) => {
    return (
        <View style={tw`w-full`}>
            <TextInput
                style={tw`px-3 py-2 bg-transparent rounded-lg w-[90%] ${style} `}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoFocus={autoFocus}
                returnKeyLabel={returnKeyLabel}
                returnKeyType={returnKeyType}
                secureTextEntry={secureTextEntry}

            />
        </View>
    )
}

export default Input