


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Team from './pages/Team/Team';

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
