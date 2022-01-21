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

export default function Home() {
  return (
    <ContainerTitle>
        <Title>Welcome to the Home page</Title>
    </ContainerTitle>
  );
}
