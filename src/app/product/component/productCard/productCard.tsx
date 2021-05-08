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
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";
import coin from "~/assets/icons/coin.svg";
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
  const canBuy = points >= product.cost;
  const pointsDifference = Math.abs(points - product.cost);

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
      <Stack spacing={2}>
        <Availability canBuy={canBuy} pointsDifference={pointsDifference} />
        <Center>
          <Image objectFit="contain" src={product.img.url} width={64}></Image>
        </Center>
        <Divider />
        <Footer product={product} />
      </Stack>
      {isSelected && canBuy && (
        <Flex
          alignItems="center"
          justifyContent="center"
          borderRadius="sm"
          height="100%"
          left={0}
          position="absolute"
          top={0}
          width="100%"
          zIndex={2}
        >
          <Box
            bgGradient="linear(to-l, #0ad4fa, #25bbf1)"
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
            <Flex
              alignItems="center"
              justifyContent="center"
              gap={2}
              
            >
              <Text fontSize={32} fontWeight={10}>
                {product.cost}
              </Text>
              <Image paddingX={2} position="relative" top={1} src={coin} />
            </Flex>

            {canBuy && (
              <Button
                height={42}
                width={228}
                borderRadius={10}
                color="primary.500"
                onClick={handleRedeem}
              >
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
