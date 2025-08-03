import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes as Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     {/* Define your routes here -ASTA E VERS ^ ERCAT__>>*/}
     <Switch>
      <Route path="/" exact element={<Home />} />
     </Switch>
     </Router>
    </div>
  );
}

export default App;
