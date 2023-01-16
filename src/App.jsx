import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import About from './pages/About/About';
import BlogsPage from './pages/Blogs/BlogsPage';
import BookAppointment from './pages/Book/BookAppointment';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignupPage from './pages/Signup/SignupPage';
import Team from './pages/Team/Team';
import BuyTicket from './pages/buyTicket/BuyTicket';
import TherapistCreate from './pages/therapistCreate/TherapistCreate';


function App() {
  return (
    <AuthProvider>
      <div className="App flex flex-col bg-gray-100 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/buyticket" element={<BuyTicket />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/therapistcreate" element={<TherapistCreate />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
