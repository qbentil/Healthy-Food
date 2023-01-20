import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

import { OnboardItem } from "../../types";
import React from "react";
import tw from "../../lib/tw";

interface OnboardItemProps {
  data: OnboardItem;
}

const Item = ({ data }: OnboardItemProps) => {
  const { title, desc, image } = data;
  const { width } = useWindowDimensions();
  return (
    <View style={[tw`flex justify-center relative w-full h-full`]}>
      <View style={[tw`absolute top-0 h-[60%]`, { width }]}>
        <Image
          source={image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
      </View>
      <View style={[tw`h-[50%] rounded-t-50 bottom-0 bg-white pt-10 absolute`, { width }]} />
      <View style={tw`h-[50%]  absolute bottom-0 flex flex-col items-center justify-center`}>
        <View style={[tw`flex justify-center items-center `, { width }]}>
          <Text style={[tw`text-4xl font-bold w-[75%] text-center my-2`, styles.title]}>{title}</Text>
          <Text style={[tw`text-base text-center text-gray-500`, styles.desc]}>{desc}</Text>
        </View>
        <View>
          {/* slide dots */}
          <View style={tw`flex flex-row items-center justify-center mt-10`}>
            <View style={tw`w-3 h-3 rounded-full bg-green-500 mx-1`}></View>
            <View style={tw`w-3 h-3 rounded-full bg-gray-500 mx-1`}></View>
            <View style={tw`w-3 h-3 rounded-full bg-gray-500 mx-1`}></View>
          </View>
        </View>
        <View style={tw`w-full flex items-center justify-center mt-15`}>
          <TouchableOpacity style={[tw`bg-green-500 rounded-lg w-[80%] text-center py-2 text-gray-500`]}>
            <Text style={tw`text-2xl text-white text-center`}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
  },
  title: {
    color: "#333",
  },
  desc: {
    color: "#333",
    paddingHorizontal: 64,
  },
});
export default Item;
