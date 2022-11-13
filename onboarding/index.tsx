import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

import Item from "./item";
import slides from "../utils/slides";

const Onboard = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <Item data={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.title}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
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

export default Onboard;
