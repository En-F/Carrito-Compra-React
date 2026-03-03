import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Carrito from "./pages/Carrito";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import "./App.css";
import "./index.css";
import OtherPage from "./pages/OtherPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="App h-screen overflow-hidden">
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/otherpage" element={<OtherPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </div>
    </>
  );
}

export default App;
