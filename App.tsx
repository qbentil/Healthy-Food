import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import tw from "./lib/tw"

export default function App() {
  return (
    <View style={[tw`bg-primary`, styles.container]}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
