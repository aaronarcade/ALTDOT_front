import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import Register from './Register';
import Header from '../components/Header';
import ProblemsPage from './Problems';
import SuggestionsPage from './Suggestions';
import ProblemsEdit from './ProblemsEdit';
const App = () => {
      
    return (

            <Router >
                <Header/>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/problems" component={ProblemsPage} />
                <Route path="/suggestions" component={SuggestionsPage}/>
                <Route path="/problemsedit/:id" component={ProblemsEdit}/>
            </Router>
       
    );
}


export default App