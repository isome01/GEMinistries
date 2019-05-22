import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios'
import Form from "../../presentational/Form/Form.jsx"
import Tabs from "../../presentational/Tabs/Tabs.jsx"

class Editor extends Component {
    /*The proptypes should be contained within an array of tabs displayed one at a time*/
    static propTypes = {
      basePath: PropTypes.string.isRequired,
      tabData: PropTypes.arrayOf(
          PropTypes.shape({
              dataObjectKey: PropTypes.string.isRequired,
              apiUrl: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              tablink: PropTypes.string.isRequired,
              tabtext: PropTypes.string.isRequired,
              inputFields: PropTypes.arrayOf(
                PropTypes.shape({
                    key: PropTypes.string.isRequired,
                    field: PropTypes.shape({
                        label: PropTypes.string.isRequired,
                        inputType: PropTypes.string.isRequired,
                        textArea: PropTypes.bool
                    })
                }).isRequired
              )
          }).isRequired,
      ).isRequired,
      maxNoOfImages: PropTypes.number
    }

    constructor(props){
      super(props)
      this.state = {
        retrievingData: false,
        removeButton: false
      }
      this.toggleSubmit = this.toggleSubmit.bind(this)
    }

    componentDidMount() {
      this.setState({
        retrieveData: false,
        removeButton: false
      })
    }

  toggleSubmit = (inputValues, key, url) => {
    if (key && url){
      this.setState({retrievingData: true})
      let data = {}
      data[key] = inputValues

      console.log(data)
      const authOptions = {
        method: 'POST',
        url,
        data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        maxContentLength: 10000000
      }

      axios(authOptions).then(
        results => {
          console.log(results.data.message)
          this.setState({
            retrievingData: false,
            removeButton: true
          })
        },
        err => {
          console.log(err)
          this.setState({retrievingData: false})
        }
      )
    } else {
      console.log(`key and url values: ${key} and ${url}`)
    }
  }

  render() {
    const {tabData, basePath} = this.props
    return (
        <div className='editor container-fluid'>
          <Tabs
            navtabs={tabData.map(tab => ({
                link: `${basePath}${tab.tablink}`,
                text: tab.tabtext
              }))}
            children={null}
          />
          {tabData.map((tab)=>(
            <div className='offset-1 col-sm-10'>
              <Route
                path={`${basePath}${tab.tablink}`}
                render={()=><Form
                  key={`${basePath}${tab.tablink}`}
                  dataObjectKey={tab.dataObjectKey}
                  apiUrl={tab.apiUrl}
                  title={tab.title}
                  inputFields={tab.inputFields}
                  toggleSubmit={this.toggleSubmit}
                  retrievingData={this.state.retrievingData}
                  removeButton={this.state.removeButton}
                  maxNoOfImages={this.props.maxNoOfImages}
                />}
              />
            </div>
            )
          )}
        </div>
      )
  }
}

export default Editor
