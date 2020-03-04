import React from 'react';
import './App.css';
import { link, Link } from "react-router-dom";

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <Link style={navStyle} to="/Shop">
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to="/Categories">
                <li>Catégories</li>
                </Link>
                <Link style={navStyle} to="/Villes">
                <li>Villes</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;