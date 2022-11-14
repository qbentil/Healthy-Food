import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
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
      <View style={[tw`h-[60%]`, { width }]}>
        <Image
          source={image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
      </View>
      <View style={[tw`h-[40%]`, { width }]}>
        <View style={[tw`flex justify-center items-center`, { width }]}>
          <Text style={[tw`text-2xl font-bold`, styles.title]}>{title}</Text>
          <Text style={[tw`text-base text-center`, styles.desc]}>{desc}</Text>
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
