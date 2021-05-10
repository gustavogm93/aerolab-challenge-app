import axios from "axios";

import {Pagination} from "~/common/pagination/types";

import {Product, ProductHistory} from "./types";

export default {
  list: async (page: number): Promise<Pagination<Product>> => {
    const {data} = await axios.get(
      `https://aerolab-service.herokuapp.com/product?page=${page}&limit=16`,
    );

    return data;
  },

  redeem: async (product: Product): Promise<string> => {
    const body = {
      productId: product._id,
    };

    const {data} = await axios.post("https://aerolab-service.herokuapp.com/product/redeem", body);

    return data;
  },

  historyList: async (): Promise<ProductHistory[]> => {
    const {data} = await axios.get("https://aerolab-service.herokuapp.com/user/history");

    return data;
  },
};
