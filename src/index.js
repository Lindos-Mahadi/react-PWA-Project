import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import swDev from './swDev';
import {BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  // <React.StrictMode>
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.Fragment>,
  // </React.StrictMode>,
  document.getElementById('root')
);
swDev();