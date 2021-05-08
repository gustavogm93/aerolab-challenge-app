import api from "~/api/api";
import { ProductHistory } from "./types";

export default {

  list: async (): Promise<ProductHistory[]> => {
    const { data } = await api.get('https://aerolab-service.herokuapp.com/user/history')

    return data
  },

}
