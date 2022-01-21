# Training React Js App

## Installation && configuration

Installation
```
npm install react-router-dom@6
```

Dans le fichier index.js
```
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
    <App />
</BrowserRouter>,

```

Dans le fichier de la navigation
```
import {Routes, Route, Link} from 'react-router-dom'

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
```