import { Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import buyBlue from "~/assets/icons/buy-blue.svg";
import coin from "~/assets/icons/coin.svg";

interface Props {
  canBuy: boolean;
  pointsDifference: number;
}
//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const Availability: React.FC<Props> = ({ canBuy, pointsDifference }) => {
  if (canBuy) {
    return (
      <Stack
        className="purchase-availability"
        alignItems="center"
        color="primary.500"
        direction="row"
        fontSize="sm"
        fontWeight="500"
        justifyContent="center"
        position="absolute"
        right={2}
        top={2}
      >
        <Image src={buyBlue} width={42} height={42} borderRadius={9999}></Image>
      </Stack>
    );
  }

  return (
    <Stack
      alignItems="center"
      backgroundColor="#616161"
      borderRadius={9999}
      color="primary.500"
      direction="row"
      fontSize="sm"
      fontWeight="500"
      justifyContent="center"
      padding={3}
      paddingY={1}
      position="absolute"
      right={2}
      width={142}
      height={42}
      opacity="0.8"
      top={2}
    >
      <Text
        fontFamily="SourceSansPro-Regular"
        fontSize={14}
        letterSpacing="-0.03px"
        text-align="right"
        color="white"
      >
        {`You need ${pointsDifference}`}
      </Text>
      <Image src={coin} width={6} height={6}></Image>
    </Stack>
  );
};

export default Availability;
