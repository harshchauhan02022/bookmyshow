import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../screens/NotFound";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Stream from "../screens/Stream";
import Event from "../screens/Events";
import Plays from "../screens/Plays";
import Sports from "../screens/Sports";
import Activites from "../screens/Activites";
import Singin from "../screens/Singin";
import ListYourShow from "../screens/ListYourShow";
import Corporates from "../screens/Corporates";
import Giftcards from "../screens/Giftcards";
import Offers from "../screens/Offers";
import Todo from "../screens/Todo";
import AddBlog from "../screens/blogs/AddBlog";

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
     <Route path="/signin" element={<Singin />} />
     <Route path="/ListYourShow" element={<ListYourShow />} />
     <Route path="/Corporates" element={<Corporates />} />
     <Route path="/Offers" element={<Offers />} />
     <Route path="/giftcards" element={<Giftcards />} />
     <Route path="/todo" element={<Todo />}/>
     <Route path="/blogs" element={<AddBlog />} />
     <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
   </div>
  </Router>
 );
};

export default Layout; 