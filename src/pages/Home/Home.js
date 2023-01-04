import React from 'react';
import Hero from '../../components/HeroSection/HeroSection';
import Communication from '../../components/Communication/Communication';
import Appointment from '../../components/Appointment/Appointment';
import Purchase from '../../components/Purchase/Purchase';


function Home() {
  return (
    <div className="Home">
      
      <Hero />
      <Appointment />
      <Communication />
      <Purchase />
    </div>
  );
}

export default Home;
