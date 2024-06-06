import react from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import myImage from '../img/meAnna.jpg'

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