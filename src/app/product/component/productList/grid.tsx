import React from "react";
import { Product } from "../../types";
import { Grid as ChakraGrid, Text } from "@chakra-ui/react";
import ProductCard from "~/app/product/component/productCard/productCard";

interface Props {
  products: Product[];
}
//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const Grid: React.FC<Props> = ({ products }) => {
  const [selected, setSelected] = React.useState<Product["_id"] | null>(null);

  return (
    <ChakraGrid
      gap={6}
      templateColumns="repeat(auto-fill, minmax(256px, 1fr))"
      width="100%"
    >
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          isSelected={selected === product._id}
          onClick={() => setSelected(product._id)}
        />
      ))}
    </ChakraGrid>
  );
};

export default Grid;
