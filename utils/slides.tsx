import { Image } from "react-native";
import tw from "../lib/tw";

const slides = [
  {
    backgroundColor: "#fff",
    title: "Get discounts on all products",
    subtitle: "Save money on all products in our store",
    image: <Image source={require("../assets/images/splash-1.png")} style={tw`w-84 h-84 rounded-full object-contain`} />,
  },
  {
    backgroundColor: "#fff",
    title: "Buy premium quality fruits",
    subtitle: "We sell only the best quality fruits",
    image: <Image source={require("../assets/images/splash-2.png")} style={tw`w-84 h-84 rounded-full object-contain`} />,
  },
  {
    backgroundColor: "#fff",
    title: "Buy Qualiity Diary Products",
    subtitle: "We sell only the best quality Diary Products",
    image: <Image source={require("../assets/images/splash-3.png")} style={tw`w-84 h-84 rounded-full object-contain`} />,
  },
  {
    backgroundColor: "#fff",
    title: "Buy Qualiity Diary Products",
    subtitle: "We sell only the best quality Diary Products",
    image: <Image source={require("../assets/images/splash-4.png")} style={tw`w-84 h-84 rounded-full object-contain`} />,
  },
];

export default slides;
