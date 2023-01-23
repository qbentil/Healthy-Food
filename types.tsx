export type OnboardItem = {
    id: string;
    title: string,
    desc: string,
    image: any
}

export type Category = {
    id: string;
    title: string;
    icon: any;
    color: string;
}

export type Product = {
    id:     string; 
    title:  string;
    price:  number;
    image:  any;
    rating?: number;
    category?: string;
    quantity: number;
    description?: string;
    unit?: string;
}