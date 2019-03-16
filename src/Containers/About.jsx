import React from 'react'

import TableGenerator from './TableGenerator'

import { Box } from '../Components'

const About = () => {
    const aboutValues = [
        [
            "First Name:",
            "Amirali",
            "Last Name:",
            "Ameri",
        ],
        [
            "Age:",
            "21",
            "Experience:",
            "3 years",
        ],
        [
            "Phone:",
            "+989190912275",
            "Email:",
            "amiraliamhh@gmail.com",
        ],
        [
            "Location:",
            "Tehran, Iran",
        ],
    ]

    return (
        <React.Fragment>
            <h2>About</h2>
            <Box>
                <TableGenerator values={aboutValues} />
            </Box>
        </React.Fragment>
    )
}

export default About
