import {Stack, Image, Text} from "@chakra-ui/react";
import React from "react";

import buyBlue from "~/assets/icons/buy-blue.svg";
import buyWhite from "~/assets/icons/buy-white.svg";
import coin from "~/assets/icons/coin.svg";

interface Props {
  canBuy: boolean;
  isSelected: boolean;
  pointsDifference: number;
}
//TODO: Grilla chakra minimo 256px y maximo todo el espacio
const Availability: React.FC<Props> = ({canBuy, isSelected, pointsDifference}) => {
  if (canBuy) {
    return (
      <Stack
        alignItems="center"
        className="purchase-availability"
        color="cyan.400"
        direction="row"
        fontSize="sm"
        fontWeight="500"
        justifyContent="center"
        position="absolute"
        right={2}
        top={2}
        zIndex={3}
      >
        <Image
          borderRadius={9999}
          height={isSelected ? 50 : 42}
          src={isSelected ? buyWhite : buyBlue}
          width={isSelected ? 50 : 42}
        />
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
      height={42}
      justifyContent="center"
      opacity="0.8"
      padding={3}
      paddingY={1}
      position="absolute"
      right={2}
      top={2}
      width={142}
    >
      <Text
        color="white"
        fontFamily="SourceSansPro-Regular"
        fontSize={14}
        letterSpacing="-0.03px"
        text-align="right"
      >
        {`You need ${pointsDifference}`}
      </Text>
      <Image height={6} src={coin} width={6} />
    </Stack>
  );
};

export default Availability;
