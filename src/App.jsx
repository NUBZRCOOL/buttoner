import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from './components/Navbar.jsx';


const App = () => {


    


    return (

        <Router>

            <Navbar />

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </Router>
    );
}

export default App;