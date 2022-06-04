import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={tw`text-red-600`}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
