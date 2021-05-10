import React from "react";
import {Grid as ChakraGrid} from "@chakra-ui/react";

import {Product} from "../../types";
import ProductCard from "~/app/product/component/productCard/productCard";
import {useSelected} from "../../hooks";

interface Props {
  products: Product[];
}
const Grid: React.FC<Props> = ({products}) => {
  const [selected, setSelected] = useSelected();

  return (
    <ChakraGrid gap={6} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          isSelected={selected === product._id}
          product={product}
          onClick={() => setSelected(product._id)}
        />
      ))}
    </ChakraGrid>
  );
};

export default Grid;
