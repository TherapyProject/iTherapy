import React from 'react';
import Appointment from '../../components/appointment/Appointment'
import Communication from '../../components/Communication/Communication';

function Home() {
  return (<div className="Home">
    <Appointment />
    <Communication />
  </div>);
}

export default Home;
