import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router,Route,Routes as Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     {/* Define your routes here -ASTA E VERS ^ ERCAT__>>*/}
     <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path='/Menu' element={<Menu />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
     </Switch>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
