import React from 'react';
import Appointment from '../../components/appointment/Appointment';

function Home() {
  return (<div className="Home">
    <Hero />
    <Appointment />
    <Communication />
    <Purchase />

  </div>);
}

export default Home;
