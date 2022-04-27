import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
const Router = () => {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default Router;
