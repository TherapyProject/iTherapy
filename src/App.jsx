import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { db } from './backend/firebase';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import PrivateRoute from './components/PrivateRoute/privateRoute';
import Scroll from './components/Scroll/Scroll';
import { AuthProvider } from './contexts/AuthContext';
import About from './pages/About/About';
import BlogsPage from './pages/Blogs/BlogsPage';
import NewBlogPage from './pages/Blogs/NewBlogPage';
import SingleBlogPage from './pages/Blogs/SingleBlogPage';
import BookAppointment from './pages/Book/BookAppointment';
import BuyTicket from './pages/buyTicket/BuyTicket';
import BuyTicketThanks from './pages/buyTicket/BuyTicketThanks';
import Contact from './pages/Contact/Contact';
import ContactThanks from './pages/Contact/ContactThanks';
import Home from './pages/Home/Home';
import LearnMore from './pages/Learn-More-Page/LearnMore';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import SignupPage from './pages/Signup/SignupPage';
import Team from './pages/Team/Team';
import TherapistCreate from './pages/therapistCreate/TherapistCreate';

function App() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    console.log('getting blogs');
    const collectionRef = collection(db, 'blogs');
    onSnapshot(collectionRef, (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        const blog = {
          id: docChange.doc.id,
          ...docChange.doc.data(),
        };
        setBlogs((prevBlogs) => [...prevBlogs, blog]);
      });
    });
  };

  useEffect(() => {
    getBlogs();
  }, blogs);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
          <Navbar />
          <Scroll />
          <Routes>
            <Route path="/" element={<Home blogData={blogs} />} />
            <Route path="/blogs" element={<BlogsPage blogsData={blogs} />} />
            <Route
              path="/blogs/:blogId"
              element={<SingleBlogPage blogData={blogs} />}
            />
            <Route path="/newblog" element={<PrivateRoute />}>
              <Route path="/newblog" element={<NewBlogPage />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/therapistCreate" element={<TherapistCreate />} />
            <Route path="/ContactThanks" element={<ContactThanks />} />
            <Route path="/buyticketthanks" element={<BuyTicketThanks />} />
            <Route path="/buyticket" element={<PrivateRoute />}>
              <Route path="/buyticket" element={<BuyTicket />} />
            </Route>
            <Route path="/book" element={<PrivateRoute />}>
              <Route path="/book" element={<BookAppointment />} />
            </Route>
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
