import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <div className="header grid-cell-nav">
            <Nav variant="underline" className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home" className='linkNav'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className='linkNav'>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className='linkNav'>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" className='linkNav'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Header;