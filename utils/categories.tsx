import { Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import tw from "twrnc";

const Categories = [
    {
        id: 1,
        name: "Chicken",
        urlParam: 'chicken',
        icon: <MaterialCommunityIcons name="food-turkey" style={tw`text-2xl text-gray-50`} />,
    },
    {
        id: 2,
        name: "Fruits",
        urlParam: 'fruits',
        icon: <MaterialCommunityIcons name="fruit-cherries" style={tw`text-2xl text-gray-50`} />,
    },
    {
        id: 3,
        name: "Soft Drinks",
        urlParam: 'drinks',
        icon: <Entypo name="drink"  style={tw`text-2xl text-gray-50`} />,
    },
    {
        id: 4,
        name: "Desserts",
        urlParam: 'desserts',
        icon: <Entypo name="cake" style={tw`text-2xl text-gray-50`} />,
    },
    {
        id: 5,
        name: "Ice Cream",
        urlParam: 'icecream',
        icon: <MaterialIcons name="icecream" style={tw`text-2xl text-gray-50`} />,
    },
    {
        id: 6,
        name: "Fish",
        urlParam: 'fish',
        icon: <FontAwesome5 name="fish"  style={tw`text-2xl text-gray-50`} />
    },
    {
        id: 7,
        name: "Rice",
        urlParam: 'rice',
        icon: <MaterialCommunityIcons name="rice" style={tw`text-2xl text-gray-50`} />,
    },
    {
        id: 8,
        name: "Curry",
        urlParam: 'curry',
        icon: <MaterialCommunityIcons name="food" style={tw`text-2xl text-gray-50`} />,
    },
]

export default Categories;