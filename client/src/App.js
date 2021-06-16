import './App.css';
import React from 'react';
import {BrowserRouter as Router,Redirect,Route, Switch} from "react-router-dom"
import {Navbar} from "react-bootstrap"
import {HomePage} from "./componetns/home.page"
import { Direct } from "./componetns/content.page";
function App(){
    return(
      <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            Home Cloud
            </Navbar.Brand>
        </Navbar>
        <HomePage/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Redirect to="/content"></Redirect>
          </Route>
          <Route path="/content/:path">
            <Direct/>
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }

export default App;
