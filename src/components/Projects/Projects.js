import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({image, id, title, description, tags, source, visit}) => (
        <div>
          <BlogCard key={id}>
            {image ? <Img src={image}/> : null}
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
);

export default Projects;