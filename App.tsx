import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/Home';
import StartScreen from './screens/Start';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}

