import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

//Import page templates
import Homepage from '../templates/Homepage/Homepage.jsx';

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
                    <div>
                    <Switch>
                        <Route to="/" exact strict component={Homepage} />

                    </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;