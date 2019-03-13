import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

//Import page templates
import Homepage from '../templates/Homepage/Homepage.jsx';
import AboutUspage from '../templates/AboutUspage/AboutUspage.jsx';
import Errorpage from '../templates/Errorpage/Errorpage.jsx';

class App extends Component {
    
    constructor(){
        super();
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    render(){
        return(
            <div class="app-content">
                <Router>
                    <Switch>
                        <Route path="/" exact strict component={Homepage} />
                        <Route path="/About_Us" strict component={AboutUspage} />
                        <Route component={Errorpage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;