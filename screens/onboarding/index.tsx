import tw from '../../lib/tw'
import Onboarding from 'react-native-onboarding-swiper';
import {onboard} from '../../utils/slides';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const OboardingScreen = ({ navigation }: any) => {
    const DotComponent = ({ selected }: { selected: boolean }) => {
        return (
            <View style={tw`w-4 h-4 flex items-center justify-center rounded-full p-2
                ${selected ? 'border border-primary-dark' : ''}
            `}>
                <View style={tw`w-2 h-2 rounded-full
                    ${selected ? 'bg-primary-dark' : 'bg-grey'}
                `}></View>
            </View>
        )
    }
    const DoneComponent = ({ onPress }: any) => {
        return (
            <TouchableOpacity onPress={onPress} style={tw`h-8 bg-primary-dark rounded-full items-center justify-center flex flex-row px-2 mx-4`}>
                <Ionicons name="checkmark-done-outline" style={tw`text-xl text-white `} />
                <Text style={tw`text-white ml-1`}>{"Go"}</Text>
            </TouchableOpacity>
        )
    }
    const SkipComponent = ({ onPress, skipLabel }: any) => {
        return (
            <TouchableOpacity onPress={onPress} style={tw`h-8 bg-dark rounded-full items-center justify-center flex flex-row px-2 mx-4`}>
                <Ionicons name="checkmark-done-outline" style={tw`text-xl text-white `} />
                <Text style={tw`text-white `}>{skipLabel}</Text>
            </TouchableOpacity>
        )
    }
    const NextButtonComponent = ({ onPress }: any) => {
        return (
            <TouchableOpacity onPress={onPress} style={tw`h-8 rounded-full items-center justify-center flex flex-row px-2 mx-4`}>
                <Text style={tw`text-primary mr-2`}>Next</Text>
                <Ionicons name="ios-arrow-redo-outline" style={tw`text-xl text-primary `} />
            </TouchableOpacity>
        )
    }
    return (
        <Onboarding
            pages={onboard}
            nextLabel={'Next'}
            onSkip={() => navigation.navigate('HomeScreen')}
            onDone={() => navigation.navigate('HomeScreen')}
            skipLabel={'Skip'}
            DotComponent={DotComponent}
            bottomBarHighlight={false}
            transitionAnimationDuration={1}
            DoneButtonComponent={DoneComponent}
            SkipButtonComponent={SkipComponent}
            NextButtonComponent={NextButtonComponent}
        />
    )
}

export default OboardingScreen