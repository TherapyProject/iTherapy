import React from 'react';
import Hero from '../../components/HeroSection/Hero';
import Communication from '../../components/Communication/Communication';
import Appointment from '../../components/Appointment/Appointment'

function Home() {
  return (<div className="Home">
    <Hero />
    <Appointment />
    <Communication />
  </div>);
}

export default Home;
