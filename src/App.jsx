import './App.css';
import Nav from './Navigation/Nav.jsx';
import Home from './Home/Home.jsx';
import Create from './Create/Create.jsx';
import Recipe from './Recipe_Page/Recipe.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Random from './Random/Random';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
            <Route path="/random" element={<Random/>}/>
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
