import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import NotFound from './Pages/NotFound.js';
import Footer from './Components/Footer.component.js';
import NavBar from './Components/NavBar.component.js';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element = { <Home/> } />
            <Route path="/about" element = { <About/> } />
            <Route path="/resume" element = { <About/> } />
            <Route path="/shop" element = { <About/> } />
            <Route path="*" element={ <NotFound/>} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
