import './App.css';
import Nav from './Navigation/Nav.jsx';
import Home from './Home/Home.jsx';
import Create from './Create/Create.jsx';
import Recipe from './Recipe_Page/Recipe.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
