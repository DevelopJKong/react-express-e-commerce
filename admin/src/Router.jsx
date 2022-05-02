import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productsList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Router = () => {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user
  )?.currentUser?.isAdmin;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        {admin && (
          <>
            <Topbar />
            <Container>
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </Container>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
