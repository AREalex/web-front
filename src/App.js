import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Shop from "./Shop";
import Categories from "./Categories";
import Villes from "./Villes";
import { BrowserRouter as Router, Switch, Route,Link, NavLink, useLocation  } from 'react-router-dom';
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import crea from './crea';



function loginNav(){

  if(true){
    return(
      <div>
      <div className="PageSwitcher">
            <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/crea" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          </div>

          <div className="FormTitle">
            <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/crea" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
          </div>
      </div>)
  }
  else{
    return <div></div>
  }

}


class App extends Component {


  constructor(props) {
    super(props)
  }

  
  


  render() {
  

    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Form">
            
          <loginNav />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Shop" component={Shop} />
            <Route path="/Categories" component={Categories} />
            <Route path="/Villes" component={Villes} />
            <Route path="/crea" component={crea} />

          </Switch>
          </div>
        </div>
      </Router>
)   ;
  }
}

export default App;
