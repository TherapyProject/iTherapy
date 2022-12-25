import React from 'react';
import Communication from '../../components/Communication/Communication';
import Appointment from '../../components/Appointment/Appointment'

function Home() {
  return (<div className="Home">
    <Appointment />
    <Communication />
  </div>);
}

export default Home;
