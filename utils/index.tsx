import { Category, Product } from "../types";

export const CategoriesData = [
    {
        id: "1",
        title: "Vegetables",
        icon: require("../assets/images/icons/vegetable.png"),
        color: "#E6F2EA"
    },
    {
        id: "2",
        title: "Fruits",
        icon: require("../assets/images/icons/fruits.png"),
        color: "#FFE9E5"
    },
    {
        id: "3",
        title: "Beverages",
        icon: require("../assets/images/icons/bev.png"),
        color: "#FFF6E3"
    },
    {
        id: "4",
        title: "Grocery",
        icon: require("../assets/images/icons/grocery.png"),
        color: "#F3EFFA"
    },
    {
        id: "5",
        title: "Edible Oil",
        icon: require("../assets/images/icons/oil.png"),
        color: "#DCF4F5",
    },
    {
        id: "6",
        title: "Household",
        icon: require("../assets/images/icons/household.png"),
        color: "#FFE8F2"
    },
    {
        id: "7",
        title: "Baby Care",
        icon: require("../assets/images/icons/babycare.png"),
        color: "#D2EFFF"
    }
] as Category[]

export const ProductsData = [
    {
        id: "1",
        title: "Fresh Peach",
        price: 8.00,
        image: require("../assets/images/products/peach.png"),
        rating: 4.5,
        category: "2",
        quantity: 1,
        description: "Fresh Peach from the farm",
        unit: "dosen"
    },
    {
        id: "2",
        title: "Avocado",
        price: 7.00,
        image: require("../assets/images/products/avocado.png"),
        rating: 4.5,
        category: "2",
        quantity: 1,
        description: "Fresh Avocado from the farm",
        unit: "2.0 lbs"
    },
    {
        id: "3",
        title: "Pineapple",
        price: 9.90,
        image: require("../assets/images/products/pineapple.png"),
        rating: 4.5,
        category: "2",
        quantity: 1,
        description: "Fresh Pineapple from the farm",
        unit: "1.5 lbs"
    },
    {
        id: "4",
        title: "Black Grapes",
        price: 7.05,
        image: require("../assets/images/products/grapes.png"),
        rating: 4.5,
        category: "2",
        quantity: 1,
        description: "Fresh Black Grapes from the farm",
        unit: "5.0 lbs"
    },
    {
        id: "5",
        title: "Pomegranate",
        price: 2.09,
        image: require("../assets/images/products/pomegranate.png"),
        rating: 4.5,
        category: "2",
        quantity: 1,
        description: "Fresh Pomegranate from the farm",
        unit: "1.5 lbs"
    },
    {
        id: "6",
        title: "Fresh Broccoli",
        price: 3.00,
        image: require("../assets/images/products/broccoli.png"),
        rating: 4.5,
        category: "1",
        quantity: 1,
        description: "Fresh Broccoli from the farm",
        unit: "1.0 kg"
    },
    {
        id: "7",
        title: "Organic Lemon",
        price: 2.22,
        image: require("../assets/images/products/lemon.png"),
        rating: 4.5,
        category: "2",
        quantity: 1,
        description: "Fresh Lemon from the farm",
        unit: "1.5 lbs"
    }
] as Product[]