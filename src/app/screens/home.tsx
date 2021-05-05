import React from "react";
import { Flex, CircularProgress, Heading, Stack } from "@chakra-ui/react";
import { Product } from "~/app/product/types";
import header from "~/assets/header.png";
import ProductList from "~/app/product/component/productList";
import api from "~/app/product/api";

const HomeScreen: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [status, setStatus] = React.useState<
    "pending" | "resolved" | "rejected"
  >("pending");

  React.useEffect(() => {
    api.list().then((products) => {
      setProducts(products);
      setStatus("resolved");
    });
  }, []);

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

  return (
    <Stack flex={1} spacing={6}>
      <Flex
        alignItems="flex-end"
        backgroundImage={`url(${header})`}
        backgroundSize="cover"
        borderRadius="md"
        justifyContent="flex-start"
        minHeight={64}
        padding={6}
      >
        <Heading color="white" fontSize="4xl">
          Electronics
        </Heading>
      </Flex>
      <ProductList products={products} />
    </Stack>
  );
};

export default HomeScreen;
