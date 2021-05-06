import {
  Stack,
  Text,
  Center,
  Box,
  BoxProps,
  Image,
  Divider,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";
import buyBlue from "~/assets/icons/buy-blue.svg";
import { usePoints, useRedeem } from "~/app/user/hooks";
import Availability from "./availability";
import Footer from "./footer";

interface Props extends BoxProps {
  product: Product;
  isSelected: boolean;
}
//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const ProductCard: React.FC<Props> = ({ product, isSelected, ...props }) => {
  const [points] = usePoints();
  const canBuy = product.cost <= points;
  const redeem = useRedeem();

  function handleRedeem() {
    if (canBuy) {
      return redeem(product);
    }
  }
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
        <Availability canBuy={canBuy} />
        <Center>
          <Image objectFit="contain" src={product.img.url} width={64}></Image>
        </Center>
        <Divider />
        <Footer product={product} />
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
          <Box
            backgroundColor={canBuy ? "primary.500" : "gray.500"}
            borderRadius="sm"
            height="100%"
            left={0}
            opacity={0.9}
            position="absolute"
            top={0}
            width="100%"
          />
          <Stack
            color="white"
            fontSize="2xl"
            fontWeight="bold"
            spacing={6}
            zIndex={3}
          >
            <Stack spacing={0}>
              <Text> {points} </Text>
              <Text borderBottomColor="white" borderBottomWidth={2}>
                -{product.cost}
              </Text>
              <Text> {points - product.cost}</Text>
            </Stack>
            {canBuy && (
              <Button color="primary.500" onClick={handleRedeem}>
                Reedem now
              </Button>
            )}
          </Stack>
        </Flex>
      )}
    </Box>
  );
};

export default ProductCard;
