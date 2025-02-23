import React from "react";
import { Routes, Route } from "react-router-dom";
import Navber from "./components/mainPage/Navber";
import MainArt from "./components/artwork/mainjsx/MainArt";
import ContactMenu from "./components/Contact/Mainjsx/Contact";
import Footer from "./components/mainPage/Footer";
import ScrollToTop from "./components/mainPage/ScrollToTop";
import ButtonMenu from "./components/mainPage/ButtomMenu";
import Main from "./components/mainPage/mainjsx/Main";
import "./index.css"; 

const App = () => {
  return (
    <div className="app-container">
      {/* 导航栏 */}
      <Navber />

      <ScrollToTop />

      <ButtonMenu />

      {/* 路由切换区 */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/artworks" element={<MainArt />} />
        <Route path="/contact" element={<ContactMenu />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

