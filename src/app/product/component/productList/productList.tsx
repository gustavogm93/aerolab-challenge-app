import { Divider, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import { useProduct } from "../../hooks";
import Count from "./count";
import Filters from "./filters";
import Grid from "./grid";
import Pagination from "./pagination"
import { Filter } from "./types";


const ProductList: React.FC = () => {  
  const products = useProduct();
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

  return (
    <Stack alignItems="flex-start" spacing={6}>
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        flex={1}
        spacing={6}
        width="100%"
      >
        <Count/>
          <Divider borderColor="gray.300" height={12} orientation="vertical" />
        <Filters active={filter} onChange={setFilter}/>
        <Spacer />
        <Pagination/>
      </Stack>
      
      <Grid products={filteredProducts} />
      <Count
        current={filteredProducts.length}
        total={filteredProducts.length}
      />
    </Stack>
  );
};

export default ProductList;
