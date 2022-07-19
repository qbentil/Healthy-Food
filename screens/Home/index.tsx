import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Categories from "../../components/categories";
import Header from "../../components/header";
import MenuSection from "../../components/sections/menu";
import React from "react";
import Searchbar from "../../components/searchbar";
import tw from "twrnc";

// FFB087

const HomeScreen = (navigation:any) => {
  return (
    // <TouchableWithoutFeedback accessible onPress={Keyboard.dismiss}>
      <SafeAreaView style={tw`bg-[#eee] h-full w-full`}>
        <View style={tw`px-5`}>
          <Header />
          <Searchbar />
        </View>
        <Categories />
      </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
