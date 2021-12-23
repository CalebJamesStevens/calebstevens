import Header from './components/Header'
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/AboutMe';


function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
