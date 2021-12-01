import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJava} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FaEthereum } from "react-icons/fa";

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <br/>
    <br/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      Short write up on tech
    </SectionText>
    <List>
    <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>App development</ListTitle>
          <ListParagraph>
            Some knowledge and experience in Full Stack development
            using React and Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size = "3rem" />
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Worked mostly with Java <br/>
            during schooling days for problem solving
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>Web development</ListTitle>
          <ListParagraph>
            Currently learning web development using <br/>
            Next.JS framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaEthereum size = "3rem" />
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph>
            Particularly interested in and learning Web3 and blockchain technology <br/>
            Current avid crypto trader
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
