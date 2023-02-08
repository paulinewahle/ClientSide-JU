import React, { Component } from  'react';
import ReactDOM from 'react-dom';
import '../index.scss';


//import App
import App from "../App"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
/*const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
const Switch = require("react-router-dom").Switch; */
import Home from './home';
import Products from './products';
import registrationForm from './registrationForm';

const Webpages = () => {
    return(
            <Switch>
            <Route exact path="/" component= {Home} />
            <Route path = "/products" >
                <Products />
            </Route>
            <Route path = "/registrationForm" component = {registrationForm} />
            </Switch>
    );
};
export default Webpages;

ReactDOM.render(<Router> <App/>  </Router>, document.querySelector('#root'));
