import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    border-bottom: 1px solid grey;
    padding: 0px 4em;
    background: white;

    a, a:hover {
        text-decoration: none;
        color: #111;
        width: 100%;
        text-align: center;
        padding: 1em 0px;
        user-select: none;
    }

    .active {
        border-bottom: 2px solid #111;
    }
`;

const Navbar = () => {
    const links = [
        {
            text: "About",
            link: "/about",
        },
        {
            text: "Skills",
            link: "/skills",
        },
        {
            text: "Experience",
            link: "/experience",
        },
        {
            text: "Contact Me",
            link: "/contact",
        },
    ]

    return (
        <NavbarContainer>
            {
                links.map((item, i) => (
                    <NavLink to={item.link} activeClassName="active" key={i} >{ item.text }</NavLink>
                ))
            }
        </NavbarContainer>
    )
}

export default Navbar
