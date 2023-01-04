import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';


function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
