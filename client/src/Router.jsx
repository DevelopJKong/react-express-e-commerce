import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const Router = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/react-express-e-commerce/register">
        {user ? <Redirect to="/react-express-e-commerce"/> : <Register />}
        </Route>
        <Route path="/react-express-e-commerce/login">
          {user ? <Redirect to="/react-express-e-commerce"/> : <Login />}
        </Route>
        <Route path="/react-express-e-commerce/cart">
          <Cart/>
        </Route>
        <Route path="/react-express-e-commerce/products/:category">
          <ProductList />
        </Route> 
        <Route path="/react-express-e-commerce/products/:id">
          <Product />
        </Route>
        <Route exact path="/react-express-e-commerce">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
