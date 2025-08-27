
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from "./components/Projects";
import HeroSection from "./components/Hero";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;