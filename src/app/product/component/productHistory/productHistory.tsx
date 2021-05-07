import React from "react";
import {
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  Image,
  Tfoot,
  Box,
  Badge,
  Flex,
} from "@chakra-ui/react";
import coin from "~/assets/icons/coin.svg";
import api from "./api";
import { ProductHistory } from "./types";

//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const ProductHistory: React.FC = () => {
  const [products, setProducts] = React.useState<ProductHistory[]>([]);
  const [status, setStatus] = React.useState<
    "pending" | "resolved" | "rejected"
  >("pending");

  React.useEffect(() => {
    api.list().then((products) => {
      setProducts(products);
      setStatus("resolved");
    });
  }, []);

  function toDate(date: string) {
    const newDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return newDate.toLocaleTimeString([], options);
  }

  return (
    <Box maxW="6xl" overflow="hidden" boxShadow="md" bg="white" padding={10}>
      <Table variant="simple">
        <Thead>
          <Tr maxW={"1m"}>
            <Th align-items="center">product</Th>
            <Th>price</Th>
            <Th>category</Th>
            <Th>date</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody margin={100}>
          {products.map((product) => (
            <Tr key={product._id}>
              <Td width={1}>{product.name}</Td>
              <Td>
                <Flex>
                  <Badge borderRadius="full" px="2" colorScheme="gray">
                    {product.cost}
                  </Badge>
                  <Image height={4} src={coin} width={4} />
                </Flex>
              </Td>
              <Td>
                <Badge borderRadius="full" px="2" colorScheme="cyan">
                  {product.category}
                </Badge>
              </Td>

              <Td>
                <Badge borderRadius="full" px="2" colorScheme="brown">
                  {toDate(product.createDate)}
                </Badge>
              </Td>

              <Td>
                <Image
                  objectFit="contain"
                  src={product.img.url}
                  width={20}
                  height={20}
                ></Image>
              </Td>
            </Tr>
          ))}
        </Tbody>

        <Tfoot></Tfoot>
      </Table>
    </Box>
  );
};

export default ProductHistory;
