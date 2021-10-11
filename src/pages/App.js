import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import Register from './Register';
import Header from '../components/Header';
const App = () => {
    
      
      
    return (
        
            <Router >
                <Header/>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                
            </Router>
       
    );
}


export default App