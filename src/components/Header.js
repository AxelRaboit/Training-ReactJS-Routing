import React, { Fragment } from 'react';
import styled from 'styled-components';
import Home from './navigation/Home'
import About from './navigation/About'
import Profile from './navigation/Profile'
import Projects from './navigation/Projects'
import {Routes, Route, Link} from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: #0097d6;
    height: 50px;
    padding: 0 20px;
`

const NavLeftPart = styled.div`

`

const NavRightPart = styled.div`
    margin-left: 50px;
    display: flex;
    justify-content: flex-start;
    width: 90%;
`

const StyledLogo  = styled(Link)`
     text-decoration: none;
     color: white;
     font-weight: bold;
     font-size: 1.5em;
`;

const StyledLink  = styled(Link)`
     color: white;
     margin-right: 20px;
     text-decoration: none;

     &:hover {
         color: yellow;
     }
`;


const Header = () => {
    return (
        <Fragment>
            <Nav>
                <NavLeftPart>
                    <StyledLogo to='/'>Logo</StyledLogo>
                </NavLeftPart>
                <NavRightPart>
                    <StyledLink to='/'>Accueil</StyledLink>
                    <StyledLink to='/projects'>Projets</StyledLink>
                    <StyledLink to='/about'>À propos</StyledLink>
                    <StyledLink to='/profile/:id'>Profil</StyledLink>
                </NavRightPart>
            </Nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile/:id' element={<Profile />} />
            </Routes>
        </Fragment>
    );
};

export default Header;

