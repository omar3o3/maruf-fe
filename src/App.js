import "./App.css";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import LandingPage from "./components/LandingPage.js";
import About from "./components/About.js";
import NavBar from "./components/NavBar.js";
import Contact from "./components/Contact.js";

function App() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
