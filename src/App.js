import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home'
import Info from './pages/Info'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Mychart from "./pages/Mychart.js";
import Myplayer from "./pages/Myplayer.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="info" element={<Info/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="chart" element={<Mychart/>}/>
          <Route path="player" element={<Myplayer/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

