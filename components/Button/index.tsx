import { View, TouchableOpacity, Text } from 'react-native'
import tw from '../../lib/tw'

interface ButtonProps {
    onPress?: () => void,
    showIcon?: boolean,
    icon?: JSX.Element | string,
    text?: string,
    variant?: 'primary' | 'secondary' | 'default',
    style?: string | any
}
const Button = ({ variant = 'default', showIcon, icon, onPress, text, style }: ButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={tw`py-3 px-4 flex flex-row items-center  rounded-md shadow
            ${variant === 'primary' ? 'bg-primary' :
                    variant === 'secondary' ? 'bg-white' : 'bg-primary'}
            ${!icon ? 'justify-center' : 'justify-start'}
                    ${style}
        `} >
            {
                icon && icon
            }
            <View style={tw`w-full  flex flex-col
                ${!icon ? 'justify-center items-center ml--2' : 'ml-14'}
            `}>
                <Text style={tw`text-lg font-bold ml-2
                ${variant === 'primary' ? 'text-white' :
                        variant === 'secondary' ? 'text-black' : 'text-primary-dark'}
                `}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button