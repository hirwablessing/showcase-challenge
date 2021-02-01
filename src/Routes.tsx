import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { useSelector } from 'react-redux';
import { selectUserFromLocalStorage } from './features/user/userSlice'

const Routes: React.FC = () => {
  const UserFromLocalStorage = useSelector(selectUserFromLocalStorage) || ""
  useEffect(() => {
    console.log = console.warn = () => { };

  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props: any) => <Home {...props} />}
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
