import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Cart, Home, Profile, Search } from '../../screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tabs.Navigator screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: '#000',
            headerStyle:{
                backgroundColor: '#e91e63'
            },  
            tabBarShowLabel: false,
            headerShown: false
                        
        }}
        >
        <Tabs.Screen name="Home" component={Home} options= {{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <AntDesign name="home" color={color} size={size} />
            )
        }} />
        <Tabs.Screen name="Cart" component={Cart} options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color, size}) => (
                <Ionicons name="basket-outline" color={color} size={size} />
            )
        }} />
        <Tabs.Screen name="Search" component={Search} options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
                <AntDesign name="search1" color={color} size={size} />
            )
        }} />
        <Tabs.Screen name="Profile" component={Profile} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused, color, size}: {focused:boolean, color: string, size: number}) => (
                <AntDesign name="user" color={color} size={size} />
            )
        }} />
        </Tabs.Navigator>
    );
}

export default BottomTabs;