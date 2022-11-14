import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    // const activeControl = ({isActive}) =>{
    //     return {
    //         backgroundColor: isActive ? '#3A4256' : '',
    //         color: isActive ? '#000000' : '',
    //         borderRadius: isActive ? '5px' : ''
    //     }
    // }
    return (
    <Navbar expand="lg">
        <Container>
        <Navbar.Brand as={Link} to='/'>Doctors Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavLink className='me-2 text-decoration-none menu py-2 px-2' as={Link} to='/home'>Home</NavLink>
                <NavLink className='me-2 text-decoration-none menu py-2 px-2' as={Link} to='/about'>About</NavLink>
                <NavLink className='me-2 text-decoration-none menu py-2 px-2' as={Link} to='/appointment'>Appointment</NavLink>
                <NavLink className='me-2 text-decoration-none menu py-2 px-2' as={Link} to='/reviews'>Reviews</NavLink>
                <NavLink className='me-2 text-decoration-none menu py-2 px-2' as={Link} to='/contact-us'>Contact Us</NavLink>
                <NavLink className='me-2 text-decoration-none menu py-2 px-2' as={Link} to='/login'>Login</NavLink>
                <NavLink className='me-2 text-decoration-none menu py-2 px-2' as={Link} to='/asdf'>Error</NavLink>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;