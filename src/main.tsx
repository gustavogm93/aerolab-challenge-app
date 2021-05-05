import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomeScreen from "~/app/screens/home";
import { Provider as UserProvider } from "../src/app/user/context";
import Layout from "~/app/layout/layout";
import theme from "./theme";
import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Layout>
          <HomeScreen />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
