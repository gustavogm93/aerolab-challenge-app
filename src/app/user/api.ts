import api from "~/api/api";

import {User} from "./types";

export default {
  getProfile: async (): Promise<User> => {
    const {data} = await api.get("https://aerolab-service.herokuapp.com/user/me");

    return data;
  },

  points: {
    add: async (amount: number): Promise<number> =>
      await api.get("https://aerolab-service.herokuapp.com/user/points"),
  },
};
