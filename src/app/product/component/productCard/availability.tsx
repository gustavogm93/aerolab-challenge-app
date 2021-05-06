import { Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import buyBlue from "~/assets/icons/buy-blue.svg";
import coin from "~/assets/icons/coin.svg";

interface Props {
  canBuy: boolean;
}
//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const Availability: React.FC<Props> = ({ canBuy }) => {
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
      right={6}
      width={142}
      height={42}
      opacity="0.9"
      top={6}
    >
      <Text color="white"> {"You need 222"}</Text>
      <Image src={coin} width={5} height={5}></Image>
    </Stack>
  );
};

export default Availability;
