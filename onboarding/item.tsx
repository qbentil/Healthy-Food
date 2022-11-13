import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { OnboardItem } from "../types";
import React from "react";

interface OnboardItemProps {
  data: OnboardItem;
}

const Item = ({ data }: OnboardItemProps) => {
  const { title, desc, image } = data;
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Item;
