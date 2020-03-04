import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Shop from "./Shop";
import Categories from "./Categories";
import Villes from "./Villes";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import crea from './crea';



class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Shop" component={Shop} />
            <Route path="/Categories" component={Categories} />
            <Route path="/Villes" component={Villes} />
            <Route path="/crea" component={crea} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
