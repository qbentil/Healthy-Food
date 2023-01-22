import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import tw from '../../lib/tw'
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import Button from '../Button';
import Input from '../Input';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const SignupForm = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    return (
        <View style={tw`w-full`}>
            <View style={tw`flex flex-row items-center bg-white py-2 px-3 rounded-lg mb-2 w-full`}>
                <EvilIcons name="envelope" style={tw`text-3xl text-dark`} />
                <Input placeholder='Email address' keyboardType='email-address' returnKeyType='next' returnKeyLabel='next' value={email} style={`ml-2`} onChange={setEmail} />
            </View>
            <View style={tw`flex flex-row items-center bg-white py-2 px-3 rounded-lg mb-2 w-full`}>
                <SimpleLineIcons name="phone" style={tw`text-2xl text-dark`} />
                <Input placeholder='Phone number' keyboardType='numeric' returnKeyType='next' returnKeyLabel='next' value={phone} style={`ml-2`} onChange={setPhone} />
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

            <Button
                text='Create account'
                variant='primary'
                style={`my-5`}
                onPress={() => navigation.navigate('LoginScreen')}
            />
        </View>
    )
}

export default SignupForm