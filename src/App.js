// src/App.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Adjusted import path
import { ThemeProvider } from "./context/ThemeContext"; // Ensure correct import
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ToastContainer />
        <Layout />
      </ThemeProvider>
    );
  }
}

export default App;
