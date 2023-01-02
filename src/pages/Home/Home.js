import React from 'react';
import Appointment from '../../components/Appointment/Appointment';
import Communication from '../../components/Communication/Communication';
import Hero from '../../components/HeroSection/HeroSection';
import Purchase from '../../components/Purchase/Purchase';
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Appointment />
      <Communication />
      <RecentBlogs />
      <Purchase />
    </div>
  );
}

export default Home;
