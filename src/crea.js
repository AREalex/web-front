import './App.css';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Col from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom'


class crea extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      prénom: "",
      nom: "",
      ville: ""
    }

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

  handleChangePrenom(event) {
    var value = event.target.value;

    this.setState({
      prénom: value
    });
  }

  handleChangeNom(event) {
    var value = event.target.value;

    this.setState({
      nom: value
    });
  }

  handleChangeVille(event) {
    var value = event.target.value;

    this.setState({
      ville: value
    });
  }

  handleSubmitForm() {
    console.log("test")
    let databody = {
      "email": this.state.email,
      "password": this.state.password,
      "prénom": this.state.prénom,
      "nom": this.state.nom,
      "ville": "Montpellier"
    }
    console.log(databody)
    fetch('https://goodieserver.herokuapp.com/api/users/', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(databody)
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      if(data.res=="correct"){
        window.location = "/Shop";
      }
      else{
        console.log("already exists")
      }
    })
    .catch(err => console.log(err));
  }

  /*handleDeleteForm() {
    console.log("test")
    let databody = {
      "email": this.state.email,
      "password": this.state.password,
      "prénom": this.state.prénom,
      "nom": this.state.nom,
      "ville": "Montpellier"
    }
    console.log(databody)
    var url = 'https://goodieserver.herokuapp.com/api/users/' + this.state.email

    fetch(url, {
      method: 'DELETE',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(databody)
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      if(data.res=="correct"){
        window.location = "/";
      }
      else{
        console.log("already exists")
      }
    })
    .catch(err => console.log(err));
  }*/




  render() {
    return (
      <div className="FormCenter">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Email</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your email" name="name" onChange={event => this.handleChangeMail(event)} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" onChange={event => this.handleChangePassword(event)} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Lastname</label>
          <input type="test" id="prenom" className="FormField__Input" placeholder="Enter your lastname" name="lastname" onChange={event => this.handleChangeNom(event)} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Firstname</label>
          <input type="text" id="firstname" className="FormField__Input" placeholder="Enter your firstname" name="firstname" onChange={event => this.handleChangePrenom(event)} />
        </div>

        <div className="FormField">
          <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={event => this.handleChangeNom(event)} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
          </label>
        </div>
        <div className="FormField">
        <label className="FormField__Label" htmlFor="name">Ville</label>
         <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control as="select">
              <option>Montpellier</option>
              <option>Lille</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        </div>


        <div className="FormField">
            <button className="FormField__Button mr-20" onClick={() => this.handleSubmitForm()}>Sign Up</button> <Link to="/" className="FormField__Link">I'm already member</Link>
        </div>
        <div className="FormField">
            <button className="FormField__Button mr-20" onClick={() => this.handleDeleteForm()}>Delete User</button> 
        </div>
    </div>

       
    )
  }

  
}

export default crea;