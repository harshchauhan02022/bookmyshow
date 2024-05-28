import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../screens/NotFound";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Stream from "../screens/Stream";
import Singin from "../screens/Singin";
import Event from "../screens/Events";
import Plays from "../screens/Plays";
import Sports from "../screens/Sports";
import Activites from "../screens/Activites";

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
     <Route path="*" element={<NotFound />} />
     <Route path="/singin" element={<Singin />} />

    </Routes>
    <Footer />
   </div>
  </Router>
 );
};

export default Layout; 