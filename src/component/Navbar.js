import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                {/* Nav Links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/">
                            <i className="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage-product">
                            <i className="fas fa-box"></i> Manage Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage-order">
                            <i className="fas fa-list"></i> Manage Order
                        </Link>
                    </li>
                    <li>
                        <Link to="/feedback">
                            <i className="fas fa-comment"></i> Feedback
                        </Link>
                    </li>


                    {/* Logout Button */}
                    <button className="logout-btn">
                        <i className="fas fa-sign-out-alt"></i> Log Out
                    </button>
                </ul>


            </nav>
        </>
    );
};

export default Navbar;