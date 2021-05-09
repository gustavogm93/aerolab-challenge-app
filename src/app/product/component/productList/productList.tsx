import {CircularProgress, Divider, Flex, Spacer, Stack} from "@chakra-ui/react";
import React from "react";

import {Status} from "~/common/status/types";
import {useProduct, useStatus} from "../../hooks";

import Count from "./count";
import Filters from "./filters";
import Grid from "./grid";
import Pagination from "./pagination";
import {Filter} from "./types";

const ProductList: React.FC = () => {
  const products = useProduct();
  const status = useStatus();
  const [filter, setFilter] = React.useState<Filter>(Filter.MostRecent);
  const filteredProducts = React.useMemo(() => {
    switch (filter) {
      case Filter.HighestPrice: {
        return [...products].sort((a, b) => b.cost - a.cost);
      }
      case Filter.LowestPrice: {
        return [...products].sort((a, b) => a.cost - b.cost);
      }
      case Filter.MostRecent:
      default: {
        return products;
      }
    }
  }, [filter, products]);

  if (status === Status.Pending) {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <CircularProgress isIndeterminate color="cyan.400" />
      </Flex>
    );
  }

  return (
    <Stack alignItems="flex-start" spacing={6}>
      <Stack alignItems="center" as="nav" direction="row" flex={1} spacing={6} width="100%">
        <Count />
        <Divider borderColor="gray.300" height={12} orientation="vertical" />
        <Filters active={filter} onChange={setFilter} />
        <Spacer />
        <Pagination />
      </Stack>

      <Grid products={filteredProducts} />
    </Stack>
  );
};

export default ProductList;
