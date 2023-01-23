import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import tw from '../../lib/tw'
import { EvilIcons } from '@expo/vector-icons';
import Toggle from '../Toggle';
import Button from '../Button';
import Input from '../Input';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const LoginForm = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const [toggleValue, setToggleValue] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <View style={tw`w-full`}>
            <View style={tw`flex flex-row items-center bg-white py-2 px-3 rounded-lg mb-2 w-full`}>
                <EvilIcons name="envelope" style={tw`text-3xl text-dark`} />
                <Input placeholder='Email address' keyboardType='email-address' returnKeyType='next' returnKeyLabel='next' value={email} style={`ml-2`} onChange={setEmail} />
            </View>
            <View style={tw`flex flex-row items-center bg-white py-2 px-3 rounded-lg mb-2`}>
                <EvilIcons name="lock" style={tw`text-3xl text-dark`} />
                <Input
                    placeholder='Password'
                    hasPassword
                    keyboardType='default'
                    value={password} style={`ml-2`}
                    returnKeyType='done'
                    returnKeyLabel='done'
                    onChange={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword} />
            </View>

            <View style={tw`flex flex-row justify-between items-center px-5 my-2 mb-5`}>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={tw`flex flex-row items-center justify-center`}
                    >
                        <Toggle value={toggleValue} onValueChange={
                            (value) => setToggleValue(value)
                        } />
                        <Text style={tw`text-link-hover ml-1 text-base`}>Remeber me</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={tw`flex flex-row items-center justify-center`}
                    activeOpacity={0.7}
                >
                    <Text style={tw`text-link-hover text-base`}>Forgot password</Text>
                </TouchableOpacity>
            </View>
            <Button
                text='Login'
                variant='primary'
                style={`mb-5`}
                onPress={() => navigation.replace('HomeScreen')}
            />
        </View>
    )
}

export default LoginForm