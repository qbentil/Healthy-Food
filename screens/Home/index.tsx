import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Categories from "../../components/categories";
import Header from "../../components/header";
import React from "react";
import Searchbar from "../../components/searchbar";
import tw from "twrnc";

// FFB087
interface Props {
  navigation?: Boolean;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback accessible = {false} onPress={Keyboard.dismiss}>
      <SafeAreaView style={tw`bg-[#eee] h-full w-full`}>
        <View style={tw`px-5`}>
          <Header />
          <Searchbar />
          <Categories />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
