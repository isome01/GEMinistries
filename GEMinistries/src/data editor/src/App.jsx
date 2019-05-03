import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route } from 'react-router-dom'
import Navbar from './presentational/Navbar/Navbar.jsx'
import EventsEditor from './container/Events/EventsEditor.jsx'
import AnnouncementsEditor from './container/Announcements/AnouncementsEditor.jsx'
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
            {text: "Events Editor", link: "/Events"},
            {text: "Community Editor", link: "#"},
            {text: "Announcement Editor", link: "/Announcements"}
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
                    <Route path={"/Events"} exact strict component={EventsEditor}/>
                    <Route path={"/Announcements"} exact strict component={AnnouncementsEditor} />
                </Switch>
            </Router>
        )
    }
}

export default App
