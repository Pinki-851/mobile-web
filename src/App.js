import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/Layout/Navbar";
import ProjectDetail from "./components/Projects/ProjectDetail";
import SignIn from "./components/auth/SignIn";
import Signup from "./components/auth/SignUp";
import CreateProject from "./components/Projects/CreateProject";
import { useSelector } from "react-redux";

const App = () => {
  const authState = useSelector((state) => {
    return {
      auth: state.auth.auth,
    };
  });
  useEffect(() => {
    if (authState && window.location.pathname !== "/signin") {
      <Redirect to="/" />;
    }
  }, []);
  return (
    <div className="app_container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/project/:id" component={ProjectDetail} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Signup} />
          <Route path="/createproject" component={CreateProject} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
