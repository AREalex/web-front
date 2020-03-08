import React, { Component } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cat: [],
        };
    }

    componentDidMount() {
        fetch("https://goodieserver.herokuapp.com/api/villes/", {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
                console.log(this.state.data)


            })
            .then(
                fetch("https://goodieserver.herokuapp.com/api/categories/", {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        this.setState({ cat: data })
                        console.log(this.state.cat)
                    })
            ).then(
                fetch("https://goodieserver.herokuapp.com/api/categories/", {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data2 => {
                        console.log(data2)
                        this.setState({ cat: data2 })
                        console.log(this.state.cat)
                    }))
            .then(
                fetch("https://goodieserver.herokuapp.com/api/produits/", {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data3 => {
                        console.log('On est la les bg')
                        this.setState({ cat: data3 })
                        console.log(this.state.cat)
                    }))

    }




    alertClicked() {
        alert('Le produit a été ajouté à votre panier !');
    }


    ville(e) {
        window.location = "/Villes/" + e;

    }

    handleSubmitForm(databody) {
        console.log("test")

        console.log(databody)
        fetch('https://goodieserver.herokuapp.com/api/panier/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(databody)
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.res == "correct") {
                    window.location = "/Villes";
                }
                else {
                    console.log("already exists")
                }
            })
            .catch(err => console.log(err));
    }


    handleGetVille() {
        console.log("test")
        var url = 'https://goodieserver.herokuapp.com/api/villes/'
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)


            });
    }

    handleGetCategorie() {
        console.log("test")
        var url = 'https://goodieserver.herokuapp.com/api/categories/'
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)


            });
    }

    handleGetProduit() {
        console.log("test")
        var url = 'https://goodieserver.herokuapp.com/api/produits/'
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)


            });
    }



    render() {
        console.log('Render begins.')
        //const maListe = handleGetVille()
        const affVilles = this.state.data.map((n, key) => {
            return (

                <th key={key}>{n.Nom}</th>
            )

        });


        const affCat = this.state.cat.map((n, key) => {
            console.log('on affecte le affcat')
            return (
                <tr key={key}>
                    <td>{n.type}</td>
                </tr>)
        });

        return (
            <div className="Shop">
                <h1>Shop</h1>
                <Table responsive>
                    <thead >
                        <tr>
                            &nbsp;
                            {affVilles}
                        </tr>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {affCat}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Shop;