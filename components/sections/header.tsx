import { Text, View } from "react-native";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
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
        <View style={tw`h-8 w-8 bg-white rounded-full ml-5 flex items-center justify-center shadow-lg`}>
          <FontAwesome5 name="gripfire" size={24} color="red" />
        </View>
      </View>
      <Text>{navText}</Text>
    </View>
  );
};

export default SectionHeader;
