import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
