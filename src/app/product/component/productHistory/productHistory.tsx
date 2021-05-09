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
  Center,
  CircularProgress,
} from "@chakra-ui/react";

import coin from "~/assets/icons/coin.svg";
import {Status} from "~/common/status/types";
import {toDate} from "~/common/utils/date";
import {getBadgeColor} from "~/app/product/styles";

import api from "./api";
import {ProductHistory} from "./types";

//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const ProductHistory: React.FC = () => {
  const [products, setProducts] = React.useState<ProductHistory[]>([]);
  const [status, setStatus] = React.useState<Status>(Status.Pending);

  React.useEffect(() => {
    api.list().then((products) => {
      setProducts(products);
      setStatus(Status.Resolved);
    });
  }, []);

  if (status === Status.Pending) {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="cyan.400" />
      </Center>
    );
  }

  return (
    <Box bg="white" boxShadow="md" maxW="6xl" overflow="hidden" padding={10}>
      <Table variant="simple">
        <Thead>
          <Tr maxW={"1m"}>
            <Th align-items="center">product</Th>
            <Th>category</Th>
            <Th>price</Th>
            <Th>date</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody margin={100}>
          {products.map((product) => (
            <Tr key={product._id}>
              <Td>{product.name}</Td>

              <Td>
                <Badge
                  borderRadius={3}
                  colorScheme={getBadgeColor(product.category)}
                  fontSize="0.6em"
                  m="1"
                  variant="solid"
                >
                  {product.category}
                </Badge>
              </Td>
              <Td>
                <Flex>
                  {product.cost}

                  <Image height={6} marginX={1} src={coin} width={4} />
                </Flex>
              </Td>
              <Td>
                <Badge borderRadius="full" colorScheme="brown" px="2">
                  {toDate(product.createDate)}
                </Badge>
              </Td>

              <Td>
                <Image height={20} objectFit="contain" src={product.img.url} width={20} />
              </Td>
            </Tr>
          ))}
        </Tbody>

        <Tfoot />
      </Table>
    </Box>
  );
};

export default ProductHistory;
