import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Header.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons"
library.add(faGithub,faLinkedin,faInstagram)
function Header() {
    return (
        <header className="header-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={3} className="text-center">
                        <h1 style={{color:'white'}}>Yuxuan Cai</h1>
                        <Row className="icons-row text-center">
                            <Col>
                                <i><FontAwesomeIcon icon="fa-brands fa-github" className={"fa-icon"} size="xl" style={{color: "#FFFFFF",}}/></i>
                                <i><FontAwesomeIcon icon="fa-brands fa-linkedin" className={"fa-icon"} size="xl" style={{color: "#FFFFFF",}}/></i>
                                <i><FontAwesomeIcon icon="fa-brands fa-instagram" className={"fa-icon"} size="xl" style={{color: "#FFFFFF",}}/></i>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="text-center">
                        <Image src={`${process.env.PUBLIC_URL}/asset/image/photo.jpg`} fluid className="main-image" />
                    </Col>
                    <Col md={3}  className="text-center">
                        <h2 style={{color:'white'}}> Summary</h2>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
