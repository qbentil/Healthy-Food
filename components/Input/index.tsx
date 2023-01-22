import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'
import { Ionicons } from '@expo/vector-icons';
interface Props {
    style?: string | any,
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad'
    autoFocus?: boolean,
    returnKeyLabel?: string,
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'
    showPassword?: boolean,
    setShowPassword?: (value: boolean) => void,
    hasPassword?: boolean

}
const Input = ({
    onChange, value, placeholder, keyboardType = 'default', style, autoFocus, returnKeyLabel, returnKeyType, hasPassword, showPassword, setShowPassword
}: Props) => {
    return (
        <View style={tw`w-full flex-row flex items-center justify-between px-4`}>
            <TextInput
                style={tw`px-3 py-2 bg-transparent rounded-lg w-[88%] ${style} `}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoFocus={autoFocus}
                returnKeyLabel={returnKeyLabel}
                returnKeyType={returnKeyType}
                secureTextEntry={hasPassword && !showPassword}
            />
            {
                hasPassword && !showPassword && (
                    <TouchableOpacity 
                        onPress={() => setShowPassword && setShowPassword(true)}
                    activeOpacity={0.7} style={tw`flex items-center justify-center `}>
                        <Ionicons name="eye-outline" style={tw`text-xl text-dark mr-10`} />
                    </TouchableOpacity>
                )
            }
            {
                 hasPassword && showPassword && (
                    <TouchableOpacity 
                    onPress={() => setShowPassword && setShowPassword(false)}
                    activeOpacity={0.7} style={tw`flex items-center justify-center `}>
                        <Ionicons name="eye-off-outline" style={tw`text-xl text-dark mr-10`} />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default Input