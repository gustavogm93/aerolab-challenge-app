import api from "~/api/api";

import {User} from "./types";

export default {
  getProfile: async (): Promise<User> => {
    const {data} = await api.get("user/me");

    return data;
  },

  points: {
    add: async (amount: number): Promise<number> => await api.get("user/points"),
  },
};
