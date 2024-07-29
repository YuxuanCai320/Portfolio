import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Header.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
library.add(faGithub,faLinkedin,faInstagram,faEnvelope)
function Header() {
    return (
        <header className="header-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={3} className="text-center">
                        <h1 style={{color:'white'}}>Yuxuan Cai</h1>
                        <Row className="icons-row text-center">
                            <Col>
                                <a href="https://github.com/YuxuanCai320">
                                    <i><FontAwesomeIcon icon="fa-brands fa-github" className={"fa-icon"} size="xl"
                                                        style={{color: "#FFFFFF",}}/></i>
                                </a>
                                <a href="https://www.linkedin.com/in/yuxuan-cai-499681268/">
                                    <i><FontAwesomeIcon icon="fa-brands fa-linkedin" className={"fa-icon"} size="xl"
                                                        style={{color: "#FFFFFF",}}/></i>
                                </a>
                                {/*<i><FontAwesomeIcon icon="fa-brands fa-instagram" className={"fa-icon"} size="xl"*/}
                                {/*                    style={{color: "#FFFFFF",}}/></i>*/}
                                <a href="mailto:yuxuancai123@gmail.com">
                                    <i><FontAwesomeIcon icon="fa-regular fa-envelope" className={"fa-icon"} size="xl"
                                                        style={{color: "#FFFFFF",}}/></i>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="text-center">
                        <Image src={`${process.env.PUBLIC_URL}/asset/image/myPhoto.jpg`} fluid className="main-image" />
                    </Col>
                    <Col md={3}  className="">
                        <h2 style={{color:'white'}}>  I'm Yuxuan Cai, a M.S. in CS at Syracuse University. I specialize in crafting intuitive, dynamic user interfaces that ensure a seamless user experience across all devices.</h2>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
