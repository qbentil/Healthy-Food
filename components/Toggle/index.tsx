import { View, Text, Switch } from 'react-native'
import React from 'react'
import tw from '../../lib/tw'
interface Props {
    value: boolean,
    onValueChange: (value: boolean) => void
}
const Toggle = ({ value, onValueChange }: Props) => {
    return (
        <View>
            <Switch
                trackColor={{ false: '#fff', true: '#fff' }}
                thumbColor={value ? '#407EC7' : '#fff'}
                ios_backgroundColor="#fff"
                onValueChange={onValueChange}
                value={value}
                style={tw`border border-grey rounded-full `}
            />
        </View>
    )
}

export default Toggle