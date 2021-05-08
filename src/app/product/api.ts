import api from "~/api/api";
import { Pagination, Product } from "./types";

export default {

  list: async (): Promise<Pagination<Product>> => {
    const { data } = await api.get('https://aerolab-service.herokuapp.com/product')

    return data
  },

  redeem: async (product: Product): Promise<String> => {
    const body = {
      productId: product._id
    }

    const { data } = await api.post("https://aerolab-service.herokuapp.com/product/redeem", body)

    return data
  }

}
