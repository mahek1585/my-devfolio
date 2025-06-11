
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Header from '../../components/layout-ui/Header';
import HeroSection from './HeroSection';
import Logo from './Logo';
import SkillSection from '../Work/SkillSection';
import LatestWork from '../Work/LatestWork';
import Client from '../About/Client';
import Footer from '../../components/layout-ui/Footer';
import { Element } from 'react-scroll';

const Home = () => {
  const location = useLocation();

 
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80, 
      });
    }
  }, [location.state]);

  return (
    <div>
      <Header />
      <HeroSection />
      {/* <Logo /> */}
      <SkillSection />
      

      <Element name="work">
        <LatestWork />
        <Client />
      </Element>

      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;
