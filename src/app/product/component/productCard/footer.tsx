import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";

interface Props {
  product: Product;
}
//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const Footer: React.FC<Props> = ({ product }) => {
  return (
    <Stack alignItems="flex-start" spacing={0}>
      <Text color="gray.500" fontSize="sm">
        {product.category}
      </Text>
      <Text fontWeight="500">{product.name}</Text>
    </Stack>
  );
};

export default Footer;
