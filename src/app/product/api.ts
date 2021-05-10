import api from "~/api/api";
import {Pagination} from "~/common/pagination/types";

import {Product, ProductHistory} from "./types";

export default {
  list: async (page: number): Promise<Pagination<Product>> => {
    const {data} = await api.get(`/product?page=${page}&limit=16`);

    return data;
  },

  redeem: async (product: Product): Promise<string> => {
    const body = {
      productId: product._id,
    };

    const {data} = await api.post("/product/redeem", body);

    return data;
  },

  historyList: async (): Promise<ProductHistory[]> => {
    const {data} = await api.get("/user/history");

    return data;
  },
};
