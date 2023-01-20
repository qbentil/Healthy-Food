import tw from '../../lib/tw'
import Onboarding from 'react-native-onboarding-swiper';
import slides from '../../utils/slides';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
const OboardingScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const DotComponent = ({ selected }: { selected: boolean }) => {
        return (
            <View style={tw`w-4 h-4 flex items-center justify-center rounded-full p-2
                ${selected ? 'border border-green-500' : ''}
            `}>
                <View style={tw`w-2 h-2 rounded-full
                    ${selected ? 'bg-green-500' : 'bg-gray-500'}
                `}></View>
            </View>
        )
    }
    return (
        <Onboarding
            pages={slides}
            nextLabel={'Next'}
            skipLabel={'Get Started'}
            onSkip={() => navigation.replace('HomeScreen')}
            onDone={() => navigation.replace('HomeScreen')}
            DotComponent={DotComponent}
            bottomBarHighlight={false}
            transitionAnimationDuration={1}

        />
    )
}

export default OboardingScreen