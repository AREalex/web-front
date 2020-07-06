import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';





class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleChangeMail(event) {
    var value = event.target.value;

    this.setState({
      email: value
    });
  }

  handleChangePassword(event) {
    var value = event.target.value;

    this.setState({
      password: value
    });


  }

  handleSubmitForm() {
    console.log("test")
    console.log(this.state.email)
    var url = 'https://goodieserver.herokuapp.com/api/users/' + this.state.email
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        if (data.length == 0) {
          console.log("email incorrect")
        }
        else {
          if (data[0].password == this.state.password) {
            console.log("Vous etes connecté")
            //gerer la connexion
            window.location = "/Shop";
          } else {
            console.log("Mot de passe incorrect")
            
          }
        }


      });
  }

  creer() {
    window.location = "/crea";

  }

  render() {
    return (
      <div className="FormCenter">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" onChange={event => this.handleChangeMail(event)} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" onChange={event => this.handleChangePassword(event)} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.handleSubmitForm}>Sign In</button> <Link to="/crea" className="FormField__Link">Create an account</Link>
              </div>
              
          </div>
    );
  }
}

export default Home;
