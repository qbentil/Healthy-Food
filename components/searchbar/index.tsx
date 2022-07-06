import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FilterIcon } from "../../assets";
import tw from "twrnc";
import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  return (
    <View
      style={tw`my-2 mt-4 w-full h-12 bg-[#fff] mx-auto rounded-full flex items-center justify-between flex-row px-2`}
    >
      <AntDesign name="search1" style={tw`text-lg text-[#40484E] mr-1`} />
      <KeyboardAvoidingView
        style={tw`w-[80%] `}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={tw`text-lg text-[#40484E] leading-5  my-auto`}
          placeholder="What will you eat?"
          placeholderTextColor="#999"
          onChangeText={(text) => setQuery(text)}
          value={query}
        />
      </KeyboardAvoidingView>
      <Image source={FilterIcon} style = {tw`w-4 h-4 mr-1`} />
    </View>
  );
};

export default Searchbar;
