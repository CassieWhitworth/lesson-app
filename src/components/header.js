import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import MusicStudioLogo from '../app/assets/img/musicstudiologo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='jumbotron jumbotron-fluid'>
        <Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Link to='/'>
                        <img src={MusicStudioLogo} height='200' width='200' alt='studio logo'/>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h1>CHARLOTTE, NC</h1>
                </Col>
            </Row>
        </Container>
       
        <Navbar dark color='#f1e9e4' sticky='top' expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        Contact
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/lessons'>
                        Lessons
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/teacher'>
                        Teacher Portal
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/scheduledlessons'>
                        Scheduled Lessons
                    </NavLink>
                </NavItem>
                </Nav>
                </Collapse>   
        </Navbar>
        </header>
    )
}

export default Header;