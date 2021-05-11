import React from 'react';
//Bootstrap Imports
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
//Component Imports
import Landing from './components/Landing.jsx';
import AboutMe from './components/AboutMe.jsx';
import TechSkills from './components/TechSkills.jsx';
import Projects from './components/Projects.jsx';
import ContactMe from './components/ContactMe.jsx';

const App = () => {
    return (
        <>
            <Navbar sticky="top" id="navbar" bg="dark" variant="dark">
                <Navbar.Brand id="home" href="#home">Greta Schock</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#tech_skills">Tech Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact_me">Contact Me</Nav.Link>
                </Nav>
            </Navbar>
            <Landing />
            <AboutMe />
            <TechSkills />
            <Projects />
            <ContactMe />
        </>
    )
}

export default App;