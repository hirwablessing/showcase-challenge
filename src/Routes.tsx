import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice'

const Routes: React.FC = () => {
  const [name, setName] = useState<string>("");
  const currentUser = useSelector(selectUser);

  console.log("cureent user: ", currentUser)

  useEffect(() => {
    getName();
  }, []);

  // getting name from Home and sending it to Dashboard
  const getName = () => {
    setName(localStorage.getItem("name") || "");
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props: any) => <Home getName={getName} {...props} />}
        />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard user={name} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
