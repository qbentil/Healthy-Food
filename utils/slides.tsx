import { Image, Text } from "react-native";
import tw from "../lib/tw";

export const splash = [
  {
    backgroundColor: "#EBFFD7",
    title: "Premium Food At Your Doorstep",
    subtitle: "Save money on all products in our store",
    image: <Image source={require("../assets/images/splash-1.png")} style={tw`w-84 h-84 rounded-full`} />,
  },
  {
    backgroundColor: "#DADCE0",
    title: "Buy Premium Quality Fruits",
    subtitle: "We sell only the best quality fruits",
    image: <Image source={require("../assets/images/splash-2.png")} style={tw`w-84 h-84 rounded-full`} />,
  },
  {
    backgroundColor: "#fff",
    title: "Buy Qualiity Diary Products",
    subtitle: "We sell only the best quality Diary Products",
    image: <Image source={require("../assets/images/splash-3.png")} style={tw`w-84 h-84 rounded-full`} />,
  },
  {
    backgroundColor: "#fff",
    title: "Get Discount on All Products",
    subtitle: "We sell only the best quality Diary Products",
    image: <Image source={require("../assets/images/splash-4.png")} style={tw`w-84 h-84 rounded-full`} />,
  },
];
export const onboard = [
  {
    backgroundColor: "#fff",
    title: <Text style={tw`text-3xl  my-1 font-bold`}>Buy Grocery</Text>,
    subtitle: "Save money on all products in our store",
    image: <Image source={require("../assets/images/grocery.png")} style={tw`w-84 h-84`} />,
  },
  {
    backgroundColor: "#fff",
    title:<Text style={tw`text-3xl  my-1 font-bold`}>Fast Delivery</Text>,
    subtitle: "We sell only the best quality fruits",
    image: <Image source={require("../assets/images/delivery.png")} style={tw`w-84 h-84`} />,
  },
  {
    backgroundColor: "#fff",
    title: <Text style={tw`text-3xl  my-1 font-bold`}>Enjoy Quality Food</Text>,
    subtitle: "We sell only the best quality Diary Products",
    image: <Image source={require("../assets/images/chef.png")} style={tw`w-84 h-84`} />,
  }
];

