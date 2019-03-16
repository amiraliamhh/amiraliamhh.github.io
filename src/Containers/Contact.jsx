import React from 'react'

import TableGenerator from './TableGenerator'

import { Box } from '../Components'

const Contact = () => {
    const contactValues = [
        [
            "Phone",
            "+989190912275",
            "Email:",
            "amiraliamhh@gmail.com",
        ],
        [
            "Stackoverflow:",
            {
                text: "Here",
                href: "https://stackoverflow.com/users/8943897/amirali-ameri",
            },
            "Github:",
            {
                text: "Here",
                href: "https://github.com/amiraliamhh",
            },
        ],
        [
            "Linkedin:",
            {
                text: "Here",
                href: "https://www.linkedin.com/in/amiraliameri/",
            },
            "Telegram ID:",
            "@amir4a",
        ]
    ]

    return (
        <React.Fragment>
            <h2>Contact Me</h2>
            <Box>
                <TableGenerator values={contactValues} />
            </Box>
        </React.Fragment>
    )
}

export default Contact
