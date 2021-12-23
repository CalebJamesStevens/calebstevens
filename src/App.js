import Header from './components/Header'
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
      <Header />
    </div>
  );
}

export default App;
