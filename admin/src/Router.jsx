import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
