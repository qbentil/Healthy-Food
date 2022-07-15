import { ScrollView, View } from "react-native";

import CategoryItem from "./item";
import Items from "../../utils/categories";
import MenuSection from "../sections/menu";
import tw from "twrnc";

const Categories = () => {
  return (
    <View style={tw`py-1`}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Items.map((item, index) => (
          <CategoryItem key={index} category={item} />
        ))}
      </ScrollView>

      <MenuSection category = {Items[0].name} />
    </View>
  );
};

export default Categories;
