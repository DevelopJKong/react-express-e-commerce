import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/react-express-e-commerce/register">
          <Register />
        </Route>
        <Route path="/react-express-e-commerce/login">
          <Login />
        </Route>
        <Route path="/react-express-e-commerce/list/:id">
          <Product />
        </Route>
        <Route path="/react-express-e-commerce/list">
          <ProductList />
        </Route> 
        <Route path="/react-express-e-commerce/cart">
          <Cart/>
        </Route>
        <Route path="/react-express-e-commerce">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
