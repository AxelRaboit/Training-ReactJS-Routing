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
            <Link to='/'>Logo</Link>
        </NavLeftPart>
        <NavRightPart>
            <Link to='/'>Accueil</Link>
            <Link to='/projects'>Projets</Link>
            <Link to='/about'>À propos</Link>
            <Link to='/profile/:id'>Profil</Link>
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