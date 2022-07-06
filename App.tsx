import { Home } from './screens';
import {NavigationContainer,} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =   createNativeStackNavigator(); 
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions= {{headerShown: false}} >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

