import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AccordionContainer = styled.div`
    width: ${(props) => props.width || '80%'};
    background: white;
    border-radius: 3px;
    padding: 2em;
    display: flex;
    flex-direction: column;

    .con {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    a {
        padding-left: 2em;
        text-decoration: none;
    }

    h2, h3 {
        display: inline-block;
    }

    p {
        padding-left: 2em;
        display: inline-block;
    }

    .about {
        width: 100%;
    }

    .stack {
        width: 50%;
    }
`

const Accordion = (props) => {

    return (
        <AccordionContainer className={`${props.className || ''}`} >
            <div className="con">
                <div>
                    <h2>{ props.title }</h2>
                    <p>{ props.duration }</p>
                    <a href={props.website} >{ props.website_name }</a>
                </div>

                <div>
                    <h3>Role:</h3>
                    <p>{ props.role }</p>
                </div>
            </div>

            <div className="con">
                <div className="stack" >
                    <h4>Tech Stack:</h4>
                    <ul>
                    {
                        props.stack.map((tech, i) => (
                            <li key={i} >{ tech }</li>
                        ))
                    }
                    </ul>
                </div>

                <div className="about" >
                    <h4>About the company:</h4>
                    <p>{ props.about }</p>
                </div>
            </div>
        </AccordionContainer>
    )
}

Accordion.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
    website_name: PropTypes.string,
    website: PropTypes.string,
    role: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    about: PropTypes.string,
}

export default Accordion
