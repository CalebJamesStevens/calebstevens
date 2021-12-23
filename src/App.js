import Footer from './components/Footer'
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/AboutMe';


function App() {
  return (
    <div className="container">
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
