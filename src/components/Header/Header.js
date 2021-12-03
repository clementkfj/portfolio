import Link from 'next/link'; // link from prev or home page
import React, {useEffect}from 'react';
// icons from different packages
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle,  AiFillProfile } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FaEthereum } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  return (
  <Container>
    <div data-aos="fade-down-right" data-aos-delay={250}>
    <Div1>
      <Link href="/">
        <a style = {{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <FaEthereum size = "2rem" style={{marginRight: "1"}} /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    </div>
    <Div2>
    <div data-aos="fade-down-right" data-aos-delay={500}>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </div>
    <div data-aos="fade-down-right" data-aos-delay={750}>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
    </div>
    <div data-aos="fade-down-right" data-aos-delay={1000}>
      <li>
        <Link href="#footer">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </div>
    </Div2>
    <Div3>
      <div data-aos="zoom-in-left" data-aos-delay={1250}>
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
      </div>
    </Div3>
  </Container>
  )
  };

export default Header;
