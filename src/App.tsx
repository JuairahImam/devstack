import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
