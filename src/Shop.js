import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'

function Shop() {
 

    return (
        <div>
            <h1>Shop</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Villes</th>
                        <th>Angers</th>
                        <th>Paris Sorbonne</th>
                        <th>Paris Saclay</th>
                        <th>Lille</th>
                        <th>Montpellier</th>
                        <th>Marseille</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pulls</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Bananes</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Sacs</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Shop;