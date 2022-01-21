import React from 'react';
import {useParams} from "react-router-dom"
import styled from 'styled-components';

const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
`

export default function Profile() {

    const params = useParams()
    console.log(params); //The log will display the id passed
    

    return (
        <ContainerTitle>
            <Title>Welcome to the Profile page</Title>
            
        </ContainerTitle>
    );
}
