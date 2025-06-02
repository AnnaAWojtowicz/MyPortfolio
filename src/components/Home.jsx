import react from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import myImage from '../img/meAnna.jpg'
import Holidaze from '../img/Holidaze1.png'
import Ecom from '../img/Ecom1.png'
import bCreative from '../img/bCreative1.png'
import Scrapbook from '../img/ScrapbookFactory.png'
import Museum from '../img/Museum.png'
import wins from '../img/wins.png'
import lukasPhotos from '../img/lukasPhotos.png'
import pocketArt2 from '../img/pocketArt2.png'
import WeatherApp from '../img/WhatIfWeather.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma, faGithub, faChrome, faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faSass, faWordpress, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import tailwindLogo from '../img/css_tailwind_logo_icon_214735.svg';


function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='contentContainerMain'>
            <div className='contentContainer'>
                <Col xs={6} md={4} lg={4} className="imgContainer">
                    <Image src={myImage} roundedCircle className='myImage' />
                </Col>
                <h1 className="title">Hi, I'm Anna.</h1>
                <div className='aboutMeContainer'>
                    <div className='aboutMe'>I am a Front-End Developer.</div>
                    <div className='aboutMe'>I am a newly graduated Front-End Developer who loves to push my limits. I am always learning something new and striving to apply it in my designs and code.</div>
                </div>
            </div>
            <div className='contentContainer2'>
                <h2 className='subtitle'>My Projects</h2>

                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>PocketArt (in progress)</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'><i>PocketArt</i> has been created to provide a platform for daily art learning, featuring interactive quizzes that enable users to evaluate and reinforce their knowledge.</div>
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
                            {/* <a href="https://cosmic-gumption-c753e6.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a> */}
                            <a href="https://github.com/AnnaAWojtowicz/PocketArt" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                            {/* <a href="https://www.figma.com/design/bWuyWBnoJeuNEPOA7wLMOy/Holidaze?node-id=223-47703&t=xZimZNKlVHEngsUc-0" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a> */}
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <Image src={pocketArt2} className='projectImg' />
                    </div>
                </div>

                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>What If Weather</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'><i>What if Weather</i> is a clean and intuitive weather app that displays current conditions and daylight times worldwide — built with React and modern APIs.</div>
                        <div className='project'>Built with: </div>
                        <div className='project'>
                            <FontAwesomeIcon icon={faHtml5} className='icons' />
                            <FontAwesomeIcon icon={faCss3Alt} className='icons' />
                            <FontAwesomeIcon icon={faJs} className='icons' />
                            <FontAwesomeIcon icon={faReact} className='icons' />
                            <img src={tailwindLogo} className='icons' alt="Tailwind CSS logo" id="tailwind_logo" />
                        </div>
                        <div className='project'>Find out more: </div>
                        <div className='project'>
                            <a href="https://whatifweather.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a>
                            <a href="https://github.com/AnnaAWojtowicz/weatherApp" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                            {/* <a href="https://www.figma.com/design/bWuyWBnoJeuNEPOA7wLMOy/Holidaze?node-id=223-47703&t=xZimZNKlVHEngsUc-0" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a> */}
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <a href="https://whatifweather.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Image src={WeatherApp} className='projectImg' /></a>
                    </div>
                </div>

                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>Lukas' Photos</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'>This website showcases a stunning collection of Lukas' photographs, captured over several years across various countries around the world.</div>
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
                            <a href="https://lukaslarsed.com/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a>
                            <a href="https://github.com/AnnaAWojtowicz/LarsedPhotos" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                            {/* <a href="https://www.figma.com/design/bWuyWBnoJeuNEPOA7wLMOy/Holidaze?node-id=223-47703&t=xZimZNKlVHEngsUc-0" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a> */}
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <a href="https://lukaslarsed.com/" target="_blank" rel="noopener noreferrer">
                            <Image src={lukasPhotos} className='projectImg' /></a>
                    </div>
                </div>



                <div className='projectContainer projectContainerLayout'>

                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>Holidaze</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'><i>Holidaze</i> is an accommodation booking site that allows users to book holidays at various venues and provides an admin interface for managing venue registrations and bookings.</div>
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
                        <a href="https://cosmic-gumption-c753e6.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Image src={Holidaze} className='projectImg' />
                        </a>
                    </div>

                </div>
                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>Ecom</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'><i>eCom</i> is a project to build a responsive e-commerce store, featuring a homepage with product listings and search, individual product pages with detailed information, reviews and more.</div>
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
                            <a href="https://ecomstorereactproject.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a>
                            <a href="https://github.com/AnnaAWojtowicz/eComStore" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                            {/* <a href="" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a> */}
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <a href="https://ecomstorereactproject.netlify.app/" target="_blank" rel="noopener noreferrer" ><Image src={Ecom} className='projectImg' /></a>
                    </div>
                </div>
                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>Wins!</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'><i>Wins!</i> is an auction website where registered users can add items for auction, bid on items using credits, and earn credits through sales, with new users receiving initial credits upon registration and non-registered users able to browse listings.</div>
                        <div className='project'>Built with: </div>
                        <div className='project'>
                            <FontAwesomeIcon icon={faHtml5} className='icons' />
                            <FontAwesomeIcon icon={faCss3Alt} className='icons' />
                            <FontAwesomeIcon icon={faSass} className='icons' />
                            <FontAwesomeIcon icon={faJs} className='icons' />
                            <FontAwesomeIcon icon={faBootstrap} className='icons' />
                        </div>
                        <div className='project'>Find out more: </div>
                        <div className='project'>
                            <a href="https://6664050ca79dda0008e33009--spectacular-swan-aa9b30.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a>
                            <a href="https://github.com/AnnaAWojtowicz/SemesterProject2" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                            <a href="https://www.figma.com/proto/Vdf05YDTkFog7SMS0mvBJO/Wins!-Noroff-SemPro2?node-id=2302-2142&starting-point-node-id=2302%3A2142" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <a href="https://6664050ca79dda0008e33009--spectacular-swan-aa9b30.netlify.app/" target="_blank" rel="noopener noreferrer"><Image src={wins} className='projectImg' /></a>
                    </div>
                </div>
                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>B.Creative</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'><i>B.Creative</i> project involves developing an attractive and responsive front-end for a social media platform, enabling users to view, post, edit, and delete content.</div>
                        <div className='project'>Built with: </div>
                        <div className='project'>
                            <FontAwesomeIcon icon={faHtml5} className='icons' />
                            <FontAwesomeIcon icon={faCss3Alt} className='icons' />
                            <FontAwesomeIcon icon={faSass} className='icons' />
                            <FontAwesomeIcon icon={faJs} className='icons' />
                            <FontAwesomeIcon icon={faBootstrap} className='icons' />
                        </div>
                        <div className='project'>Find out more: </div>
                        <div className='project'>
                            <a href="https://courageous-chaja-80b0a8.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a>
                            <a href="https://github.com/AnnaAWojtowicz/b.creative/tree/master" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                            {/* <a href="https://www.figma.com/proto/Vdf05YDTkFog7SMS0mvBJO/Wins!-Noroff-SemPro2?node-id=2302-2142&starting-point-node-id=2302%3A2142" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a> */}
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <a href="https://courageous-chaja-80b0a8.netlify.app/" target="_blank" rel="noopener noreferrer">  <Image src={bCreative} className='projectImg' /></a>
                    </div>
                </div>
                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>The Little Scrapbook Factory</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'><i>The Little Scrapbook Factory</i> is dedicated to scrapbooking and documenting my travel adventures, where I share creative ideas, tips, and personal stories from my journeys around the world.</div>
                        <div className='project'>Built with: </div>
                        <div className='project'>
                            <FontAwesomeIcon icon={faHtml5} className='icons' />
                            <FontAwesomeIcon icon={faCss3Alt} className='icons' />
                            <FontAwesomeIcon icon={faJs} className='icons' />
                            <FontAwesomeIcon icon={faWordpress} className='icons' />
                        </div>
                        <div className='project'>Find out more: </div>
                        <div className='project'>
                            <a href="https://extraordinary-torte-4dc4e6.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a>
                            {/* <a href="https://github.com/AnnaAWojtowicz/exam2Noroff/tree/main" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a> */}
                            <a href="https://www.figma.com/proto/NF3thWkW7M8G00FjuCe1H2/the-little-scrapbook-factory?node-id=64-362&t=LJart2RW0xBYBDss-0&scaling=scale-down&page-id=2%3A4&starting-point-node-id=64%3A362&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <a href="https://extraordinary-torte-4dc4e6.netlify.app/" target="_blank" rel="noopener noreferrer"> <Image src={Scrapbook} className='projectImg' /></a>
                    </div>
                </div>
                <div className='projectContainer projectContainerLayout'>
                    <div className='projectTextContainer'>
                        <h3 className='projectTitle'>Community Science Museum</h3>
                        <div className='project'>About: </div>
                        <div className='project projectDescription'>This project involves creating an informative, appealing, and responsive website for the Community Science Museum to attract and engage primary and middle school children and their families, encouraging them to visit the museum.</div>
                        <div className='project'>Built with: </div>
                        <div className='project'>
                            <FontAwesomeIcon icon={faHtml5} className='icons' />
                            <FontAwesomeIcon icon={faCss3Alt} className='icons' />
                        </div>
                        <div className='project'>Find out more: </div>
                        <div className='project'>
                            <a href="https://jade-selkie-1e7504.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faChrome} className='icons' />
                                </span>
                            </a>
                            <a href="https://github.com/AnnaAWojtowicz/CommunityScienceMuseum" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                            <a href="https://www.figma.com/proto/eJYdAgPhOge4LYNfJUecZg/Noroff-exam1?node-id=77-501&t=wjBxBOL3ROeAz6BI-0&scaling=scale-down&page-id=2%3A9&starting-point-node-id=77%3A501" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faFigma} className='icons' />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='projectImgContainer'>
                        <a href="https://jade-selkie-1e7504.netlify.app/" target="_blank" rel="noopener noreferrer"> <Image src={Museum} className='projectImg' /></a>
                    </div>
                </div>
            </div>
            <div className='contentContainer2'>
                <h2 className='subtitle'>My Skills</h2>
                <div className='skillsContainer'>
                    <div className='skillsColumn1'>
                        <div className='skills'>
                            <div className='skill'>HTML</div>
                            <FontAwesomeIcon icon={faHtml5} className='icons' />
                        </div>
                        <div className='skills'>
                            <div className='skill'>CSS</div>
                            <FontAwesomeIcon icon={faCss3Alt} className='icons' />
                        </div>
                        <div className='skills'>
                            <div className='skill'>JavaScript</div>
                            <FontAwesomeIcon icon={faJs} className='icons' />
                        </div>
                    </div>
                    <div className='skillsColumn2'>
                        <div className='skills'>
                            <div className='skill'>Figma</div>
                            <FontAwesomeIcon icon={faFigma} className='icons' />
                        </div>
                        <div className='skills'>
                            <div className='skill'>React</div>
                            <FontAwesomeIcon icon={faReact} className='icons' />
                        </div>
                        <div className='skills'>
                            <div className='skill'>Bootstrap</div>
                            <FontAwesomeIcon icon={faBootstrap} className='icons' />
                        </div>
                    </div>
                    <div className='skillsColumn3'>
                        <div className='skills'>
                            <div className='skill'>Tailwind</div>
                            <img src={tailwindLogo} className='icons' alt="Tailwind CSS logo" id="tailwind_logo" />
                        </div>
                        <div className='skills'>
                            <div className='skill'>Sass</div>
                            <FontAwesomeIcon icon={faSass} className='icons' />
                        </div>
                        <div className='skills'>
                            <div className='skill'>Wordpress</div>
                            <FontAwesomeIcon icon={faWordpress} className='icons' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='contentContainer2'>
                <h2 className='subtitle'>Contact</h2>
                <div className='contactContainer'>
                    <div className='contactColumn1'>
                        <div className='contacts'>
                            <a href="https://www.linkedin.com/in/anna-agnieszka-wojtowicz/" target="_blank" rel="noopener noreferrer">
                                <span className='word-container'>
                                    <div className='word'>Linkedin</div>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/anna-agnieszka-wojtowicz/" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faLinkedin} className='icons' />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='contactColumn2'>
                        <div className='contacts'>
                            <a href="https://github.com/AnnaAWojtowicz" target="_blank" rel="noopener noreferrer">
                                <span className='word-container'>
                                    <div className='word'>GitHub</div>
                                </span>
                            </a>
                            <a href="https://github.com/AnnaAWojtowicz" target="_blank" rel="noopener noreferrer">
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon={faGithub} className='icons' />
                                </span>
                            </a>
                        </div>

                    </div>
                    <div className='contactColumn3'>
                        <div className='contacts'>
                            <span className='word-container'>
                                <div className='word' onClick={handleShow}>E-mail</div>
                            </span>
                            <span className='icon-container'>
                                <FontAwesomeIcon icon={faEnvelope} className='icons' onClick={handleShow} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <div className="modal-outer">
                    <div className="modal-inner">
                        <Modal.Header>
                            <Modal.Title>My e-mail address:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><a href="mailto:Anna.Agnieszka.Wojtowicz@gmail.com" id="mail-link">Anna.Agnieszka.Wojtowicz@gmail.com</a></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
        </div>

    );
}

export default Home;