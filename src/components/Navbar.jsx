import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} style={{ height: "100px", width: "100px" }} alt="Logo" />
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar
