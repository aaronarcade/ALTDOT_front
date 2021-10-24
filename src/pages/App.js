import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Header from '../components/Header';
import ProblemsPage from './Problems';
import SuggestionsPage from './Suggestions';
import ProblemsEdit from './ProblemsEdit';
import Help from './Help';
import SuggestionsEdit from './SuggestionsEdit';
const App = () => {
      
    return (

            <Router >
                <Header/>
                <Route exact path="/" component={Login} />
                <Route path="/help" component={Help} />
                <Route path="/register" component={Register} />
                <Route path="/problems" component={ProblemsPage} />
                <Route path="/suggestions" component={SuggestionsPage}/>
                <Route path="/problemsedit/:id" component={ProblemsEdit}/>
                <Route path="/suggestionsedit/:id" component={ProblemsEdit}/>
            </Router>
       
    );
}


export default App