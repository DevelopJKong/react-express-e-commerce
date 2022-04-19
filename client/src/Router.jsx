import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/list">
          <ProductList/>
      </Route>
      <Route path="/">
          <Home />
      </Route>
    </Switch>
  </BrowserRouter>
  );
};

export default Router;
