import React from 'react';
// import Appointment from '../../components/Appointment/Appointment';
// import Communication from '../../components/Communication/Communication';
// import Hero from '../../components/HeroSection/HeroSection';
// import Purchase from '../../components/Purchase/Purchase';
// import RecentBlogs from '../../components/RecentBlogs/RecentBlogs';
import BlogCard from '../../components/RecentBlogs/BlogCard';

function Home() {
  return (<div className="Home">
    {/* <Hero />
    <Appointment />
    <Communication />
    <RecentBlogs/>
    <Purchase /> */}
    <BlogCard title="here we go" img="https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />

  </div>);
}

export default Home;
