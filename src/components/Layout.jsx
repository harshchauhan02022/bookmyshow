import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "../screens/NotFound";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Stream from "../screens/Stream";
import Event from "../screens/Events";
import Plays from "../screens/Plays";
import Sports from "../screens/Sports";
import Activites from "../screens/Activites";
import ListYourShow from "../screens/ListYourShow";
import Corporates from "../screens/Corporates";
import Giftcards from "../screens/Giftcards";
import Offers from "../screens/Offers";
import Todo from "../screens/Todo";
import AddBlog from "../screens/blogs/AddBlog";
import Blogs from "../screens/blogs/Blogs";
import Contact from "../screens/Contact";
import Test from "../screens/Test";
import Login from "../pages/Login";
import Signin from "../pages/Singin";
import ForgotPassword from "../pages/ForgotPassword";


const Layout = () => {
 const { theme } = useContext(ThemeContext);

 return (
  <Router>
   <div style={{ background: theme === "light" ? "white" : "black" }}>
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/movies" element={<Movies />} />
     <Route path="/stream" element={<Stream />} />
     <Route path="/events" element={<Event />} />
     <Route path="/plays" element={<Plays />} />
     <Route path="/Sports" element={<Sports />} />
     <Route path="/Activites" element={<Activites />} />
     <Route path="/signin" element={<Signin />} />
     <Route path="/login" element={<Login />} />
     <Route path="/forgotPassword" element={<ForgotPassword />} />
     <Route path="/ListYourShow" element={<ListYourShow />} />
     <Route path="/Corporates" element={<Corporates />} />
     <Route path="/Offers" element={<Offers />} />
     <Route path="/giftcards" element={<Giftcards />} />
     <Route path="/todo" element={<Todo />} />
     <Route path="/addblogs" element={<AddBlog />} />
     <Route path="/blogs" element={<Blogs />} />
     <Route path="contact" element={<Contact />} />
     <Route path="test" element={<Test />} />
     <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
   </div>
  </Router>
 );
};

export default Layout; 