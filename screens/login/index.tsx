import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import tw from '../../lib/tw'
import { LoginForm, Header } from '../../components'

const LoginScreen = ({ navigation }: any) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={tw`w-full h-full relative bg-primary-light`}>
                    <Header
                        title="Welcome"
                        variant='dark'
                        style={`h-24`}
                    />
                    <Image source={require('../../assets/images/login.png')} style={tw`absolute`} />
                    <View style={tw`absolute bottom-0 left-0 w-full h-1/2 bg-bg-b rounded-t-3xl py-3 px-3`}>
                        <View style={tw`mb-10`}>
                            <Text style={tw`text-2xl font-bold mt-3`}>Welcome back!</Text>
                            <Text style={tw`text-sm text-dark mt-2`}>
                                Sign in to your account
                            </Text>
                        </View>
                        <LoginForm />
                        <View style={tw`flex flex-row items-center justify-center`}>
                            <Text style={tw`text-sm text-dark`}>Don't have an account?</Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate("SignupScreen")}
                                style={tw`ml-1`}>
                                <Text style={tw`text-sm font-bold`}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback >
        </KeyboardAvoidingView>
    )
}

export default LoginScreen