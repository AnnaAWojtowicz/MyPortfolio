import react from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import myImage from '../img/meAnna.jpg'
import Holidaze from '../img/Holidaze1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma, faGithub, faChrome, faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';




function Home() {
    return (
        <div className='contentContainerMain'>
            <div className='contentContainer'>
                <Col xs={6} md={4} lg={4} className="imgContainer">
                    <Image src={myImage} roundedCircle className='myImage' />
                </Col>
                <h1 className="title">Hi, I'm Anna.</h1>
                <div className='aboutMeContainer'>
                    <div className='aboutMe'>I am a Front-End Developer.</div>
                    <div className='aboutMe'>I am FED-student who loves to push my limits. I am always learning something new and trying to apply it in my designs and code.</div>
                </div>
            </div>
            <div className='contentContainer2'>
                <h2 className='subtitle'>My Projects</h2>
                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>Holidaze</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'>Holidaze is an accommodation booking site that allows users to book holidays at various venues and provides an admin interface for managing venue registrations and bookings.</div>
                        <div className='project'>Built with: </div>
                        <div className='project'>
                            <FontAwesomeIcon icon={faHtml5} className='icons' />
                            <FontAwesomeIcon icon={faCss3Alt} className='icons' />
                            <FontAwesomeIcon icon={faJs} className='icons' />
                            <FontAwesomeIcon icon={faReact} className='icons' />
                            <FontAwesomeIcon icon={faBootstrap} className='icons' />
                        </div>
                        <div className='project'>Find out more: </div>
                        <div className='project'>
                            <a href="https://cosmic-gumption-c753e6.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a>
                            <a href="https://github.com/AnnaAWojtowicz/holidaze" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                            <a href="https://www.figma.com/design/bWuyWBnoJeuNEPOA7wLMOy/Holidaze?node-id=223-47703&t=xZimZNKlVHEngsUc-0" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <Image src={Holidaze} className='projectImg' />
                    </div>



                </div>
                <div></div>
            </div>
            <div className='contentContainer2'>
                <h2 className='subtitle'>My Skills</h2>
                <Container>
                    <Row>
                        <Col xs={6} md={4} lg={4} className='skills'>HTML</Col>
                        <Col xs={6} md={4} lg={4} className='skills'>CSS</Col>
                        <Col xs={6} md={4} lg={4} className='skills'>JavaScript</Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4} lg={4} className='skills'>React</Col>
                        <Col xs={6} md={4} lg={4} className='skills'>Bootstrap</Col>
                        <Col xs={6} md={4} lg={4} className='skills'>Git</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;