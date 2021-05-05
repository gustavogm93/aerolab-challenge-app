import React from "react";
import { Stack, Container, Box, Image, Text } from "@chakra-ui/react";

import logo from "~/assets/logo.svg";
import coin from "~/assets/icons/coin.svg";
import { usePoints, useUser } from "~/app/user/hooks";
//TODO: Ver explicacion 18:00
//Justify content = elementos se empujen hacia los costados extremos
const Navbar: React.FC = () => {
  const [points, setPoints] = usePoints();
  const user = useUser();
  return (
    <Box backgroundColor="white" boxShadow="md">
      <Container maxWidth="6xl">
        <Stack
          alignItems="center"
          as="nav"
          direction="row"
          justifyContent="space-between"
          paddingY={3}
        >
          <Image height={8} src={logo} width={8} />
          <Stack
            alignItems="center"
            color="gray.500"
            direction="row"
            spacing={3}
          >
            <Text>{user.name}</Text>

            <Stack
              alignItems="center"
              backgroundColor="gray.100"
              borderRadius={9999}
              cursor="pointer"
              direction="row"
              paddingX={3}
              paddingY={2}
              onClick={() => setPoints(1000)}
            >
              <Text fontweigth="500"> {points} </Text>
              <Image height={6} src={coin} width={6} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
