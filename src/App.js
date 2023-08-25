import React from 'react';
import './App.css'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';

let App = () => {

        return(
                <React.Fragment>
                    
                  <Router>
                    <Routes>
                         <Route exact path = "/" Component={Home} /> 
                    </Routes>
                  </Router>

            </React.Fragment>
        );  
    }
export default App; 