import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import { Navbar } from '../Components'

import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 5em;

    h2 {
        text-align: center;
        color: #111;
    }
`;

const App = () => {

    return (
        <BrowserRouter>
            <React.Fragment>
                <Navbar />

                <Container>
                    <Route path="/about" exact={true} component={About} />
                    <Route path="/skills" exact={true} component={Skills} />
                    <Route path="/experience" exact={true} component={Experience} />
                    <Route path="/contact" exact={true} component={Contact} />
                </Container>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App
