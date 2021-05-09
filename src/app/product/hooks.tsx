import React from "react";

import ProductContext, {Context} from "./context";

export function useProduct(): Context["state"]["products"] {
  const {
    state: {products},
  } = React.useContext(ProductContext);

  return products;
}

export function useStatus(): Context["state"]["status"] {
  const {
    state: {status},
  } = React.useContext(ProductContext);

  return status;
}

export function usePage(): Context["actions"]["setPage"] {
  const {
    actions: {setPage},
  } = React.useContext(ProductContext);

  return setPage;
}

export function usePagination(): Context["state"]["pagination"] {
  const {
    state: {pagination},
  } = React.useContext(ProductContext);

  return pagination;
}
