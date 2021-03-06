import React from "react";
import {Stack, Container, Box, Image, Text, Tooltip} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FcTodoList} from "react-icons/fc";

import logo from "~/assets/logo.svg";
import coin from "~/assets/icons/coin.svg";
import {usePoints, useStatus, useUser} from "~/app/user/hooks";
import {Status} from "~/common/status/types";

const Navbar: React.FC = () => {
  const [points, setPoints] = usePoints();
  const status = useStatus();
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
          <Link to={"/"}>
            <Image height={8} src={logo} width={8} />
          </Link>
          <Stack alignItems="center" color="gray.500" direction="row" spacing={3}>
            <Text>{user.name}</Text>

            <Stack
              alignItems="center"
              backgroundColor="gray.100"
              borderRadius={9999}
              cursor="pointer"
              direction="row"
              height={8}
              paddingX={3}
              paddingY={2}
              onClick={() => setPoints(1000)}
            >
              {status === Status.Pending && (
                <Tooltip
                  aria-label="A tooltip"
                  bg="cyan.400"
                  borderRadius="md"
                  label="you can add points clicking here"
                >
                  <Text fontweigth="500"> ... </Text>
                </Tooltip>
              )}

              <Tooltip
                aria-label="A tooltip"
                bg="cyan.400"
                borderRadius="md"
                label="you can add points clicking here"
              >
                <Text fontweigth="500"> {points} </Text>
              </Tooltip>

              <Image height={6} src={coin} width={6} />
            </Stack>
            <Link to={"/orders"}>
              <Stack
                alignItems="center"
                backgroundColor="gray.100"
                borderRadius={9999}
                cursor="pointer"
                direction="row"
                paddingX={3}
                paddingY={2}
              >
                <FcTodoList />
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
