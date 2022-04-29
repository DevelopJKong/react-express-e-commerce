import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";

const Container = styled.div`
    display:flex;
    margin-top:10px;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <>
            <Topbar />
            <Container>
              <Sidebar />
              <Home />
            </Container>
          </>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
