export type FoodCategory = {
    id: number;
    name: string;
    urlParam: string;
    icon?: JSX.Element
  }

export type FoodItemType = {
    id: number;
    name: string;
    description: string;
    price: string;
    imageURI: string;
    category: number;
    icon?: JSX.Element;
    calories?: number;
}