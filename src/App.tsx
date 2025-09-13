import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Gallery />
        <Location />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
