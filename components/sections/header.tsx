import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import tw from "twrnc";

interface HeaderProps {
  title: string;
  navText: string;
  navPage?: String;
}
const SectionHeader = ({ title, navText, navPage }: HeaderProps) => {
  return (
    <View style={tw`flex flex-row justify-between items-center my-5 px-2`}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <Text style={tw`font-bold text-2xl`}>Our Menu</Text>
        <View style={tw`h-8 w-8 bg-white rounded-full ml-5 flex items-center justify-center shadow-lg shadow-red-500`}>
          <FontAwesome5 name="gripfire" size={24} color="red" />
        </View>
      </View>
      <View style={tw`flex flex-row items-center`}>
      <Text style={tw`text-red-600 font-bold mr-1 text-[#e80013]`}>{`${navText}`}</Text>
      <Ionicons name="chevron-forward" size={20} style={tw`text-[#e80013]`} />
      </View>
    </View>
  );
};

export default SectionHeader;
