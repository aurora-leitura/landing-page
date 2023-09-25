import './App.css';
import Home from './components/Home';
import About from './components/About';
import About2 from './components/About2';
import Work from './components/Work';
import Comentarios from './components/Comentarios';
import Contact from './components/Contact';
import Livros from './components/Livros';
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <About2 />
      <Work />
      <Livros />
      <Comentarios />
      <Contact />
    </div>
  );
}

export default App;
