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
        <section id="projects" className="min-h-[50vh]"></section>
        <section id="about" className="min-h-[50vh]"></section>
        <section id="contact" className="min-h-[50vh]"></section>
      </main>
    </div>
  );
}

export default App;
