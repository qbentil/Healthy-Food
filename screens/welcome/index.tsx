import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from '../../lib/tw'
import { Button, Header } from '../../components'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'

const WelcomeScreen = ({ navigation }: any) => {
    return (
        <View style={tw`w-full h-full relative bg-primary-light`}>
            <Header
                title="Welcome"
                variant='dark'
                style={`h-24`}
                goBack={false}

            />
            <Image source={require('../../assets/images/welcome.png')} style={tw`absolute`} />
            <View style={tw`absolute bottom-0 left-0 w-full h-2/5 bg-bg-b rounded-t-3xl py-5 px-3`}>
                <View style={tw`mb-10`}>
                    <Text style={tw`text-2xl font-bold mt-3`}>Welcome</Text>
                    <Text style={tw`text-sm text-dark mt-3`}>
                        Bentilzone Healthy foodsis here to ensure you stay healthy in all your daily consumptions without stress!
                    </Text>
                </View>
                <Button
                    icon={<AntDesign name="google" style={tw`text-2xl `} />}
                    text="Continue with Google"
                    variant="secondary"
                    style={`mb-3`}
                    onPress={() => navigation.navigation("SignupScreen")}
                />
                <Button
                    icon={<FontAwesome5 name="user-circle" style={tw`text-2xl text-white`} />}
                    text="Create an account"
                    variant="primary"
                    style={`mb-3`}
                    onPress={() => navigation.navigate("SignupScreen")}
                />
                <View style={tw`flex flex-row items-center justify-center`}>
                    <Text style={tw`text-sm text-dark`}>Already have an account?</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("LoginScreen")}
                        style={tw`ml-1`}>
                        <Text style={tw`text-sm font-bold`}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default WelcomeScreen