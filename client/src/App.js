import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import { Fragment } from 'react';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
          </Routes>
        </div>
      </Fragment>
    </Router>
    
  );
}

export default App;
