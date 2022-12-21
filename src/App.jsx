import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
