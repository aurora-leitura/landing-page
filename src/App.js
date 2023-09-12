import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Comentarios from './components/Comentarios';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Comentarios />
      <Contact />
    </div>
  );
}

export default App;
