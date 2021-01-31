// import React from "react";
// import ReactDOM from "react-dom";
// import Routes from "./Routes";

// ReactDOM.render(
//   <React.StrictMode>
//     <Routes />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);