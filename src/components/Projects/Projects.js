import React, { useState, useEffect } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Aos from 'aos';
import "aos/dist/aos.css";

const Projects = () => {

  const [count, setCount] = useState(0);
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({image, id, title, description, tags, source, visit}, index) => (
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-anchor="#example-anchor"
          data-aos-delay={index * 500}
        >
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>
              {description}
            </CardInfo>
            <div>
              <br/>
              <TitleContent>Stack</TitleContent>
              <TagList>{tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        </div>
      ))}
    </GridContainer>
  </Section>
  )
};

export default Projects;