// import Acomplishments from '../components/Acomplishments/Acomplishments';
import { useEffect } from 'react';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
// need change TimeLine and Tech area to have their own aos per component
  return (
    <Layout>
      <Section grid>
        <div data-aos="fade-left" data-aos-duration={1500}>
        <Hero />
        </div>
        <BgAnimation />
      </Section>
        <Projects />
      <div data-aos="fade-right">
      <Timeline />
      </div>
      <div data-aos="fade">
      <Technologies />
      </div>
    </Layout>
  );
};

export default Home;
