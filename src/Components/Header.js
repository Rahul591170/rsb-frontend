import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <header>
            <img src="../Images/logo.png" alt="Rahul Sports Builders Logo" />
            <h1>Rahul Sports Builders</h1>
        </header>
            <nav className="nav">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Our Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Us</a>
            </nav></div>

    );
};

export default Header;
