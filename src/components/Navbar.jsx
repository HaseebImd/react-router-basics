import React from 'react'
import logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} style={{ height: "100px", width: "100px" }} alt="Logo" />
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/products"><li>Products</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar
