import React from "react";
import { Flex, CircularProgress, Heading, Stack } from "@chakra-ui/react";
import { Product } from "~/app/product/types";
import header from "~/assets/header.png";
import ProductList from "~/app/product/component/productList";
import {useProduct } from "~/app/product/hooks";
import api from "~/app/product/api";

const HomeScreen: React.FC = () => {


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
      <ProductList />
    </Stack>
  );
};

export default HomeScreen;
