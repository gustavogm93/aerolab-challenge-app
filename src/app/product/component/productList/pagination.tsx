import React from "react";
import { Product } from "../../types";
import { Grid as ChakraGrid, Stack, Text, Image, Flex } from "@chakra-ui/react";
import arrow_left from "~/assets/icons/arrow-left.svg";



//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const Pagination: React.FC = () => {


  return (
    <Flex alignItems="center" direction="row" spacing={6} >
            <Image height={10} src={arrow_left} width={10} />
            <Image height={10} src={arrow_left} width={10} />   
    </Flex>
  );
};

export default Pagination;
