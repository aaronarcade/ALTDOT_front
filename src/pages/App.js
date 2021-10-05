import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import SignIn from './SignIn';
import Home from './Home'
import Members from './Members'
import Research from './Research'
import TimeLine from './TimeLine'
import TimeLineBoard from './TimeLineBoard';
import Papers from './Papers'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Transition from '../components/Transition';
import { createBrowserHistory } from 'history';

const App = () => {
    
      
      
    return (
        
            <Router >
                <Header />
                <Transition />
                <Route exact path="/" component={Home} />
                <Route exact path="/member" component={Members} />
                <Route exact path="/paper" component={Papers} />
                <Route exact path="/research" component={Research} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/timeline" component={TimeLine} />
                <Route exact path="/timeline-board" component={TimeLineBoard} />
                <Footer />
            </Router>
       
    );
}


export default App