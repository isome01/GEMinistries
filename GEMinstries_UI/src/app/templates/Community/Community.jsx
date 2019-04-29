import React, {Component} from 'react'
import VerticalNav from "../../presentational/VerticalNav/VerticalNav.jsx"

class Community extends Component {

  constructor(props){
    super(props)

    this.state = {
      navContent: [],
    }

    this.populateNavContent = this.populateNavContent.bind(this)
  }

  populateNavContent = content => {
    if (content){
      let navContent = content.slice()
      this.setState({navContent: navContent})
    } else {
      /*populate with default values*/
      this.setState( {
        navContent: [
          {link: '/Prayer', text: 'Prayer'},
          {link: '/Activities', text: 'Activities'},
          {link: 'Ministries', text: 'Ministries'},
          {link: '/Mission-Trips', text: 'Mission Trips'},
        ]})
    }
  }

  componentWillMount() {
    /*make and axios fetch to backend if need be...*/
    this.populateNavContent()
  }

  render(){
    const {navContent} = this.state

    return (<div>
      <div id="community-page">
        <VerticalNav
          navHeader={'Our Community'}
          navContent={navContent}
          className={'bg-light col-sm-2'}
        />
      </div>
    </div>)
  }
}

export default Community
