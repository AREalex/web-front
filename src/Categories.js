import React, { Component } from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup'


class Categories extends Component {
    
    
    
    
    
    alertClicked() {
        alert('Le produit a été ajouté à votre panier !');
    }
    
    
    
    
    
    render() {
        return (
            <ListGroup>
                <ListGroup.Item onClick={(e) => this.alertClicked()}><font color="#003300">Angers</font></ListGroup.Item>
                <ListGroup.Item onClick={(e) => this.alertClicked()}><font color="#003300">Clermont</font></ListGroup.Item>
                <ListGroup.Item onClick={(e) => this.alertClicked()}><font color="#003300">Montpellier</font></ListGroup.Item>
                <ListGroup.Item onClick={(e) => this.alertClicked()}><font color="#003300">Lille</font></ListGroup.Item>
                <ListGroup.Item onClick={(e) => this.alertClicked()}><font color="#003300">Paris-Sorbonne</font></ListGroup.Item>
            </ListGroup>
        )
    }
}
export default Categories;