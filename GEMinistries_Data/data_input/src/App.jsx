import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route } from 'react-router-dom'
import Navbar from './presentational/Navbar/Navbar.jsx'
import EventsEditor from './container/EventsEditor/EventsEditor.jsx'

class App extends Component{

    constructor(){
        super()

        this.state = {
            navbarLinks: [],
        }
    }

    componentDidMount(){
        /* Make an axios call to get gather categories for their corresponding editable data */

        const navLinks = [
            {text: "Events Editor", link: "/EventsEditor"},
            {text: "Community Editor", link: "#"},
            {text: "Announcement Editor", link: "#"}
        ]

        this.setState(()=>({navbarLinks: navLinks}))
    }

    render = () =>{
        let {navbarLinks} = this.state
        return(

            <Router>
                <Navbar
                    logo={"Data Editor"}
                    navlinks={navbarLinks}
                />
                <Switch>
                    <Route path={"/EventsEditor"} exact strict component={EventsEditor}/>
                </Switch>
            </Router>
        )
    }
}

export default App
