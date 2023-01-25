import React from 'react';
import Appointment from '../../components/Appointment/Appointment';
import Communication from '../../components/Communication/Communication';
import HeroSection from '../../components/HeroSection/HeroSection';
import Purchase from '../../components/Purchase/Purchase';
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs';

function Home({blogData}) {
  return (
    <div className="Home">
      <HeroSection />
      <Appointment />
      <Communication />
      <RecentBlogs blogData={blogData} />
      <Purchase />
    </div>
  );
}

export default Home;
