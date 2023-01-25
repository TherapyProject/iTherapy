import React from 'react';
import Appointment from '../../components/Appointment/Appointment';
import Communication from '../../components/Communication/Communication';
import HeroSection from '../../components/HeroSection/HeroSection';
import Purchase from '../../components/Purchase/Purchase';
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs';
import { useBlogs } from '../../contexts/BlogsContext';

function Home() {
  const { blogs } = useBlogs();
  console.log(blogs);
  return (
    
    <div className="Home">
      <HeroSection />
      <Appointment />
      <Communication />
      <RecentBlogs />
      <Purchase />
    </div>
  
  );
}

export default Home;
