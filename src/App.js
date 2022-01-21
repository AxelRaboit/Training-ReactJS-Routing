import React from 'react';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';

const Application = styled.div`
  background-color: #636e84;
  height: 100vh;
`

class App extends React.Component {

  render(){
    return (
      <Application>
        <Header />
      </Application>
    );

  }
}

export default App;
