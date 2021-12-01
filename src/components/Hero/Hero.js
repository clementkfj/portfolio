import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My portfolio
      </SectionTitle>
      <SectionText>
        Short write up
      </SectionText>
      <Button onClick= {() => window.location = "https://github.com/clementkfj"}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;