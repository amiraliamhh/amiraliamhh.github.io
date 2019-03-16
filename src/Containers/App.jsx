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

const HomeContainer = styled.div`
    h1 {
        text-align: center;
    }

    .container {
        padding: 0px 6em;
    }

    p {
        line-height: 2em;
    }
`;

const Home = () => {

    return (
        <HomeContainer>
            <h1>Welcome!</h1>

            <div className="container">
                <p>
                    Hi! I am Amirali Ameri, a Full-stack Javascript Developer, React Lover and Golang enthusiast.
                    I have more than 3 years of experience in industry and have worked for more than 15 companies in these years (Full-time, Part-time, and Remote).
                    I have worked both as a back-end and also as a front-end developer, but I consider my self mostly a front-end developer.
                    You can see my skills and personal information in this website (using top navigation bar), and other information about me are available via linkedin and 
                    other websites such as my Github and Stackoverflow account (you can find them in <em>contact</em> section).
                </p>
            </div>
        </HomeContainer>
    )
}

const App = () => {

    return (
        <BrowserRouter>
            <React.Fragment>
                <Navbar />

                <Container>
                    <Route path="/" exact={true} component={Home} />
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
