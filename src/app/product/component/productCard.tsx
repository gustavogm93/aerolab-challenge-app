import {
  Stack,
  Text,
  Center,
  Box,
  BoxProps,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../types";
import coin from "~/assets/icons/coin.svg";

interface Props extends BoxProps {
  product: Product;
  isSelected: boolean;
}
//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const ProductCard: React.FC<Props> = ({ product, isSelected, ...props }) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="sm"
      boxShadow="md"
      padding={6}
      position="relative"
      {...props}
    >
      <Stack spacing={3}>
        <Stack
          alignItems="center"
          backgroundColor="white"
          borderRadius={9999}
          borderWidth={1}
          color="primary.500"
          direction="row"
          fontSize="sm"
          fontWeight="500"
          justifyContent="center"
          padding={3}
          paddingY={1}
          position="absolute"
          right={6}
          spacing={2}
          top={6}
        >
          <Text> {product.cost}</Text>
          <Image src={coin} width={4} height={4}></Image>
        </Stack>
        <Center>
          <Image objectFit="contain" src={product.img.url} width={64}></Image>
        </Center>
        <Divider />
        <Stack alignItems="flex-start" spacing={0}>
          <Text color="gray.500" fontSize="sm">
            {product.category}
          </Text>
          <Text fontWeight="500">{product.name}</Text>
        </Stack>
      </Stack>
      {isSelected && (
        <Flex
          alignItems="center"
          borderRadius="sm"
          height="100%"
          justifyContent="center"
          left={0}
          position="absolute"
          top={0}
          width="100%"
          zIndex={2}
        >
          <Box>
            <Stack>
              <Stack>
                <Text> {points} </Text>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default ProductCard;
