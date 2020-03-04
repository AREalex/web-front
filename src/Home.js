import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';






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

  créér() {
    window.location = "/crea";

  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>Login</h1>
            <label for="name">Adresse mail :</label>

            <input type="text" id="name" name="name" required
              minlength="4" maxlength="40" size="20" onChange={event => this.handleChangeMail(event)}></input>

            <label for="name" class="mdp">Mot de passe :</label>

            <input type="text" id="name1" name="name" required
              minlength="1" maxlength="30" size="20" onChange={event => this.handleChangePassword(event)}></input>
            <div class="Button">
              <button onClick={this.handleSubmitForm}>Login</button>
            </div>
            <div class="buttonCrea">
              <button onClick={this.créér}>Créer un compte</button>
            </div>
          </header>
        </div>
    );
  }
}

export default Home;
