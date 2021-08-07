import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Courses from "./pages/Courses/Courses";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { UserContext } from "./UserContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, []);
  console.log(isAuth);
  return (
    <>
      <UserContext.Provider value={{ isAuth, setIsAuth }}>
        <Layout>
          {isAuth ? (
            <Switch>
              <Route path="/" exact>
                <Courses />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/courses/:id">
                <CourseDetails />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Redirect to="/login" />
            </Switch>
          )}
        </Layout>
      </UserContext.Provider>
    </>
  );
}

export default App;
