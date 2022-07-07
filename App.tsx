import { Home } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { StateProvider } from "./context/StateProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}
