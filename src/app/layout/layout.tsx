import React from "react";
import { Center, Container, Flex } from "@chakra-ui/react";
import Navbar from "./navbar";

//TODO: Stack o Flex con direction in column 15:07
//TODO: ver que es React.FC
const Layout: React.FC = ({ children }) => {
  return (
    <Flex backgroundColor="gray.50" direction="column" flex={1}>
      <Navbar />
      <Center paddingY={6}>
        <Container maxWidth="6xl">{children}</Container>
      </Center>
    </Flex>
  );
};

export default Layout;
