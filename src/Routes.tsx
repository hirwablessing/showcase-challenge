import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { useSelector } from 'react-redux';
import { selectUserFromLocalStorage } from './features/user/userSlice'

const Routes: React.FC = () => {
  const [name, setName] = useState<string>("");
  const UserFromLocalStorage = useSelector(selectUserFromLocalStorage) || ""
  console.log("User from local storage", UserFromLocalStorage);

  useEffect(() => {
    getName();
  }, []);

  // getting name from Home and sending it to Dashboard
  const getName = async () => {
    await setName(UserFromLocalStorage || "");
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
          render={() => <Dashboard user={UserFromLocalStorage} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
