import React from 'react'
import styled from 'styled-components'

import { Accordion } from '../Components'

const Container = styled.div`
    padding-left: 10%;

    .mt-2 {
        margin-top: 2em;
    }
`

const Experience = () => {

    return (
        <React.Fragment>
            <h2>Experience</h2>

            <Container>
                <Accordion 
                className="mt-2"
                title="Boursiran"
                duration="(Dec 2018 - Present)"
                website="http://boursiran.ir/"
                website_name="boursiran.ir"
                role="Senior Front-End Developer"
                stack={["React", "Redux", "Redux Saga", "Jest", "Enzyme", "Cypress"]}
                about="Boursiran securities brokerage and commodities trading and Private equity. it founded 1992 in Tehran, Iran." />

                <Accordion 
                className="mt-2"
                title="Bitooman"
                duration="(Jan 2018 - Dec 2018)"
                website="https://bitooman.ir/"
                website_name="bitooman.ir"
                role="Full-Stack Developer"
                stack={["React", "Redux", "Angular 5", "Node js", "Express", "MongoDB", "Mongoose", "Redis", "Jest", "Enzyme"]}
                about="Bitooman is a ryptocurrency trading platform. Bitooman tries to makes cryptocurrency trading easier for Iranian traders." />

                <Accordion 
                className="mt-2"
                title="Armangarayan"
                duration="(Dec 2017 - Jan 2018)"
                website="http://www.designing-application.com/"
                website_name="designing-application.com"
                role="Back-End Developer"
                stack={["Node js", "Express", "Sequelize", "MySQL"]}
                about="Armangarayan is an application development company. Some of it's customers are: Ta'avon Insurance, Atawich, Sharif university, etc." />

                <Accordion 
                className="mt-2"
                title="Asasbama"
                duration="(Oct 2017 - Jan 2018)"
                website="http://asasbama.com"
                website_name="asasbama.com (website is down)"
                role="Back-End Developer"
                stack={["Node js", "Express", "MongoDB", "Mongoose"]}
                about="Asasbama is an transportation company. It tries to make transportation cheaper and easier." />

                <Accordion 
                className="mt-2"
                title="Najm Energy"
                duration="(Aug 2017 - Oct 2017)"
                website="https://www.portal.trade/"
                website_name="portal.trade"
                role="Front-End Developer"
                stack={["Angular 2", "Ionic"]}
                about="Najm Energy is a market place for all kinds of products." />

                <Accordion 
                className="mt-2"
                title="Vira Science"
                duration="(Mar 2017 - Jun 2017)"
                website="https://www.virascience.com/"
                website_name="virascience.com"
                role="Back-End Development Intern"
                stack={["Python 3", "Django", "Postgresql"]}
                about="science journal" />
            </Container>
        </React.Fragment>
    )
}

export default Experience
