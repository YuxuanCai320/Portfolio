import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 text-center">
            <Container>
                <Row className="mt-3">
                    <Col>
                        <p>&copy; {new Date().getFullYear()} Yuxuan Cai. All Rights Reserved.</p>
                    </Col>
                    <div className="social-icons">
                        <a href="https://github.com/YuxuanCai320" target="_blank" rel="noopener noreferrer"
                           className="text-white mx-2">
                            <FontAwesomeIcon icon={faGithub} size="lg"/>
                        </a>
                        <a href="https://www.linkedin.com/in/yuxuan-cai-499681268/" target="_blank" rel="noopener noreferrer"
                           className="text-white mx-2">
                            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                           className="text-white mx-2">
                            <FontAwesomeIcon icon={faTwitter} size="lg"/>
                        </a>
                    </div>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
