import { Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Categories = [
    {
        id: 1,
        name: "Chicken",
        urlParam: 'chicken',
        icon: <MaterialCommunityIcons name="food-turkey" />,
    },
    {
        id: 2,
        name: "Fruits",
        urlParam: 'fruits',
        icon: <MaterialCommunityIcons name="fruit-cherries" />,
    },
    {
        id: 3,
        name: "Soft Drinks",
        urlParam: 'drinks',
        icon: <Entypo name="drink"  />,
    },
    {
        id: 4,
        name: "Desserts",
        urlParam: 'desserts',
        icon: <Entypo name="cake" />,
    },
    {
        id: 5,
        name: "Icecreams",
        urlParam: 'icecreams',
        icon: <MaterialIcons name="icecream" />,
    },
    {
        id: 6,
        name: "Fish",
        urlParam: 'fish',
        icon: <FontAwesome5 name="fish"  />
    },
    {
        id: 7,
        name: "Rice",
        urlParam: 'rice',
        icon: <MaterialCommunityIcons name="rice" />,
    },
    {
        id: 8,
        name: "Curry",
        urlParam: 'curry',

    }
]

export default Categories;