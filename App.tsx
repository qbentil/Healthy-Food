import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, OnboardingScreen } from './screens';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{
          headerShown: false,

        }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown: false,
          
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
