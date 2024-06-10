// src/Layout/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <footer className="bg-dark text-white py-3 text-center">
            <Container>
                <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;
