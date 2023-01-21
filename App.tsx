import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, OnboardingScreen , SplashScreen,SignupScreen, WelcomeScreen} from './screens';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false,}} /> */}
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: false,}} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false,}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false,}} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false,}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
