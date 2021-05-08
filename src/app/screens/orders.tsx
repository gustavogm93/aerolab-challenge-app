import React from "react";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import header from "~/assets/header.png";
import ProductHistory from "../product/component/productHistory/productHistory";

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
      <ProductHistory />
    </Stack>
  );
};

export default HomeScreen;
