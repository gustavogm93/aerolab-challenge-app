import api from "~/api/api";
import {Pagination} from "~/common/pagination/types";

import {Product} from "./types";

export default {
  list: async (page: number): Promise<Pagination<Product>> => {
    const {data} = await api.get(
      `https://aerolab-service.herokuapp.com/product?page=${page}&limit=16`,
    );

    return data;
  },

  redeem: async (product: Product): Promise<string> => {
    const body = {
      productId: product._id,
    };

    const {data} = await api.post("https://aerolab-service.herokuapp.com/product/redeem", body);

    return data;
  },
};
