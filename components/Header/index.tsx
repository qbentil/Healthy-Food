import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import tw from "../../lib/tw"
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
    title: string
    goBack?: boolean,
    showGoBack?: boolean,
    showRightButton?: boolean
    rightButton?: JSX.Element
    onRightButtonPress?: () => void
    variant?: 'primary' | 'dark',
    style?: string | any
}


const Header = ({ showGoBack=true, goBack = true, title, onRightButtonPress, rightButton, showRightButton, variant, style }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const handleGoBack = () => {
        goBack && navigation.goBack()
    }

    return (
        <SafeAreaView style={tw`z-10 flex flex-row items-center justify-between px-3
            ${variant === 'primary' ? 'bg-primary-light' :
                variant === 'dark' ? 'bg-black-rgba' : 'bg-white'}
            ${style}
        `}>
            <TouchableOpacity onPress={handleGoBack} style={tw`p-2`}>
                {
                    showGoBack && <MaterialIcons name="keyboard-backspace" style={tw` text-3xl ml-2
                        ${variant === 'dark' ? 'text-white' : 'text-black'}
                    `} />
                }
            </TouchableOpacity>
            <Text style={tw` font-bold text-lg
            ${variant === 'dark' ? 'text-white' : 'text-black'}
            `}>
                {title}
            </Text>
            <View style={tw`px-5`}>
                {
                    showRightButton && (<TouchableOpacity onPress={onRightButtonPress} style={tw`p-2`}>
                        {rightButton}
                    </TouchableOpacity>)
                }
            </View>
        </SafeAreaView>
    )
}

export default Header