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
    let databody = {
      "email": this.state.email,
      "password": this.state.password,
      "prénom": this.state.prénom,
      "nom": this.state.nom,
      "ville": this.state.ville
  }
    fetch('https://goodieserver.herokuapp.com/api/users/', {
      method: 'POST',
      mode: 'CORS',
      body: JSON.stringify(databody),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(err => err);
  }




  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={event => this.handleChangeMail(event)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={event => this.handleChangePassword(event)} />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <Form.Control placeholder="Saisissez votre prénom" onChange={event => this.handleChangePrenom(event)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control placeholder="Saisissez votre nom" onChange={event => this.handleChangeNom(event)} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Ville</Form.Label>
            <Form.Control as="select">
              <option>Montpellier</option>
              <option>Lille</option>
            </Form.Control>
          </Form.Group>

          <Button as="input" type="submit" value="Submit" onClick={this.handleSubmitForm()} />
        </Form.Row>
      </Form>
    )
  }
}

export default crea;