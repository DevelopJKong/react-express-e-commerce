import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Router path="/login">
          <Login />
        </Router>
        <Route path="/list/:id">
          <Product />
        </Route>
        <Route path="/list">
          <ProductList />
        </Route>    
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
