import {Category} from "../../types";

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
