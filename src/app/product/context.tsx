import {CircularProgress, Flex} from "@chakra-ui/react";
import React from "react";

import {Status} from "~/common/status/types";
import {PaginationBase} from "~/common/pagination/types";

import api from "./api";
import {Product} from "./types";

export interface Context {
  state: {
    products: Product[];
    status: Status;
    pagination: PaginationBase;
  };
  actions: {
    setPage: (page: number) => Promise<void>;
  };
}

const ProductContext = React.createContext({} as Context);

const ProductProvider: React.FC = ({children}) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [currentPage, setcurrentPage] = React.useState<number>(1);
  const [pages, setPages] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [status, setStatus] = React.useState<Status>(Status.Pending);

  async function handlePage(page: number) {
    if (!products) return;
    setStatus(Status.Pending);
    setcurrentPage(page);
  }

  React.useEffect(() => {
    api.list(currentPage).then((products) => {
      setPages(products.pagination.pages);
      setLimit(products.pagination.limit);
      setTotal(products.pagination.total);
      setProducts(products.data);
      setStatus(Status.Resolved);
    });
  }, [currentPage]);

  const state: Context["state"] = {
    products,
    status,
    pagination: {currentPage, pages, limit, total},
  };
  const actions = {
    setPage: handlePage,
  };

  return <ProductContext.Provider value={{state, actions}}>{children}</ProductContext.Provider>;
};

export {ProductContext as default, ProductProvider as Provider};
