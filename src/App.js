
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Skills from './components/skills/Skills';
import Stats from './components/stats/Stats';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Stats />
        <Contact />
      </main>
    </div>
  );
}

export default App;
