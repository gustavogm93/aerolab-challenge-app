import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "~/app/screens/home";
import Orders from "~/app/screens/orders";
import { Provider as UserProvider } from "../src/app/user/context";
import Layout from "~/app/layout/layout";
import theme from "./theme";
import "./theme.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/orders" component={Orders} />
            </Switch>
          </Layout>
        </UserProvider>
      </ChakraProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
