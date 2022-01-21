import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
`

const StyledLink  = styled(Link)`
     color: white;
     margin-right: 20px;
     text-decoration: none;

     &:hover {
         color: #0097d6;
     }
`;


const Nav = styled.nav`
  display: flex;
  justify-content: center;
`

const ContainerServicePage = styled.div`
  display: flex;
  justify-content: center;
`

export default function Services() {
  return (
  <Fragment>
    <ContainerTitle>
        <Title>Welcome to the Services page</Title>
    </ContainerTitle>
    <Nav>
      <StyledLink to='/services/marketing'>Service Marketing</StyledLink>
      <StyledLink to='/services/development'>Service Developpement</StyledLink>
    </Nav>
    <ContainerServicePage>
      <Outlet />
    </ContainerServicePage>
  </Fragment>
  );
}
