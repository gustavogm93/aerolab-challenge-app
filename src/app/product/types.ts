export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: Category;
  img: {
    url: string;
    hdUrl: string;
  };
}

export interface ProductHistory {
  _id: string;
  name: string;
  cost: number;
  category: Category;
  createDate: string;
  img: {
    url: string;
    hdUrl: string;
  };
}

export enum Category {
  Laptops = "Laptops",
  Phones = "Phones",
  Phone_Accessories = "Phone Accessories",
  Gaming = "Gaming",
  Cameras = "Cameras",
  Android_Wear = "Android Wear",
  Audio = "Audio",
  Monitors_and_TV = "Monitors & TV",
  Drones = "Drones",
  Smart_Home = "Smart Home",
  PC_Accessories = "PC Accessories",
  Tablets_and_Ereaders = "Tablets & E-readers",
}
