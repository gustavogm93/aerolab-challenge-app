import { Center, CircularProgress, Flex } from "@chakra-ui/react";
import React from "react";
import { PaginationBase } from "~/common/types";
import api from "./api";
import { Product} from "./types";

export interface Context {
  state: {
    products: Product[];
    pagination: PaginationBase;
  };
  actions: {
    setPage: (page: number) => Promise<void>;
  };
}

const ProductContext = React.createContext({} as Context);

const ProductProvider: React.FC = ({ children }) => {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [currentPage, setcurrentPage] = React.useState<number>(1);
    const [pages, setPages] = React.useState<number>(0);
    const [limit, setLimit] = React.useState<number>(0);
    const [total, setTotal] = React.useState<number>(0);
    const [status, setStatus] = React.useState<
      "pending" | "resolved" | "rejected"
    >("pending");


    async function handlePage(page: number) {
        if (!products) return;
    
        setcurrentPage(page);
      }

  React.useEffect(() => {
    api.list(currentPage).then((products) => {
      setPages(products.pagination.pages);
      setLimit(products.pagination.limit);
      setTotal(products.pagination.total);
      setProducts(products.data);
      setStatus("resolved");
    });
  }, [currentPage]);

    if (status === "pending") {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <CircularProgress
          isIndeterminate
          color="primary.500"
        ></CircularProgress>
      </Flex>
    );
  }

  const state: Context["state"] = {
    products,
    pagination: {currentPage,  pages, limit, total}   
  };
  const actions = {
    setPage: handlePage,
  };

  return (
    <ProductContext.Provider value={{ state, actions }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext as default, ProductProvider as Provider };
