import React from 'react'

import TableGenerator from './TableGenerator'

import { Box } from '../Components'

const Skills = () => {
    const skillsValues = [
        [
            "ES6",
            5,
            "Typescript:",
            4,
        ],
        [
            "React",
            5,
            "Angular:",
            2,
        ],
        [
            "Redux",
            5,
            "Webpack",
            3,
        ],
        [
            "GraphQL",
            3,
            "Node.js",
            4,
        ],
        [
            "Express",
            4,
            "MongoDB",
            3,
        ],
        [
            "Redis",
            2,
            "Next.js",
            3,
        ],
        [
            "Git",
            4,
            "Jest",
            4
        ],
        [
            "Enzyme",
            4,
            "Mocha",
            3,
        ],
        [
            "Socket.io",
            4,
            "OOP",
            4
        ],
        [
            "Functional Programming",
            3,
            "Linux",
            2,
        ],
        [
            "Nginx",
            2,
        ]
    ]

    return (
        <React.Fragment>
            <h2>Skills</h2>
            <Box>
                <TableGenerator values={skillsValues} />
            </Box>
        </React.Fragment>
    )
}

export default Skills
