import React from 'react';
import styled from 'styled-components';

const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
`

export default function About() {
  return (
    <ContainerTitle>
        <Title>Welcome to the About page</Title>
    </ContainerTitle>
  );
}
