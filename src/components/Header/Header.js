import Link from 'next/link'; // link from prev or home page
import React from 'react';
// icons from different packages
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle,  AiFillProfile } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FaEthereum } from 'react-icons/fa';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style = {{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <FaEthereum size = "2rem" style={{marginRight: "1"}} /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/clementkfj/">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/clement-kong-202184225/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/Clement_kfj">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/clement_kfj/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
