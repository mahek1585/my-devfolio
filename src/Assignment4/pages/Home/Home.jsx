// import React from 'react'
// import Header from '../../components/layout-ui/Header';
// import HeroSection from './HeroSection';
// import Logo from './Logo';
// import SkillSection from '../Work/SkillSection';
// import LatestWork from '../Work/LatestWork';
// import Client from '../About/Client';
// import Footer from '../../components/layout-ui/Footer';
// import AboutHeader from '../About/AboutHeader';
// import Body from '../About/Body';

// import { Element } from 'react-scroll'; 




// const Home = () => {
//   return (
    
//     <div>
//       <Header />
//       <HeroSection />
//       <Logo />
//       <SkillSection />
//       <Client />

//       <Element name="work">
//         <LatestWork />
//       </Element>

     

//       <Element name="contact">
//         <Footer />
//       </Element>
//     </div>
//   )
// }

// export default Home
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

  // ✅ UseEffect to scroll when returning from About page
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80, // adjust based on your header height
      });
    }
  }, [location.state]);

  return (
    <div>
      <Header />
      <HeroSection />
      <Logo />
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
