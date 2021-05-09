import {Center, CircularProgress} from "@chakra-ui/react";
import React from "react";

import productApi from "~/app/product/api";
import {Product} from "~/app/product/types";
import {Status} from "~/common/status/types";

import api from "./api";
import {User} from "./types";

export interface Context {
  state: {
    user: User;
  };
  actions: {
    addPoints: (amount: number) => Promise<void>;
    redeem: (product: Product) => Promise<void>;
  };
}

const UserContext = React.createContext({} as Context);

const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = React.useState<User>();
  const [status, setStatus] = React.useState<Status>(Status.Pending);

  async function handleRedeem(product: Product) {
    if (!user) return;

    setUser({...user, points: user.points - product.cost});

    return productApi.redeem(product).then(() => {
      setUser({...user, points: user.points - product.cost});
    });
  }

  async function handleAddPoints(amount: number) {
    if (!user) return;
    setUser({...user, points: user.points + amount});

    return api.points.add(amount).then(() => {
      setUser({...user, points: user.points + amount});
    });
  }

  React.useEffect(() => {
    api.getProfile().then((data) => {
      setUser(data);
      setStatus(Status.Resolved);
    });
  }, []);

  if (!user || status === Status.Pending) {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="cyan.400" />
      </Center>
    );
  }

  const state: Context["state"] = {
    user,
  };
  const actions = {
    addPoints: handleAddPoints,
    redeem: handleRedeem,
  };

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>;
};

export {UserContext as default, UserProvider as Provider};
