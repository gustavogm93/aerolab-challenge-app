import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "~/app/screens/home";
import Orders from "~/app/screens/orders";
import { Provider as UserProvider } from "../src/app/user/context";
import { Provider as ProductProvider } from "../src/app/product/context";
import Layout from "~/app/layout/layout";
import theme from "./theme";
import "./theme.css";
import api from "./api/api";

const App = () => {
  api.init(process.env.AEROLAB_BASE_URL)

  return (<Router>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <UserProvider>
        <ProductProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/orders" component={Orders} />
            </Switch>
          </Layout>
          </ProductProvider>
        </UserProvider>       
      </ChakraProvider>
    </React.StrictMode>
  </Router>)
}
ReactDOM.render(<App/>, document.getElementById("root")
);
