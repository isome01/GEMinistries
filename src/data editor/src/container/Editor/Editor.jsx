import PropTypes from 'prop-types'
import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import Form from "../../presentational/Form"
import DataDialogue from '../../presentational/DataDialogue'
import Tabs from "../../presentational/Tabs"
import {ClipLoader} from 'react-spinners'

class Editor extends Component {
    /*The proptypes should be contained within an array of tabs displayed one at a time*/
  static propTypes = {
    uriHangar: PropTypes.func.isRequired,
    domain: PropTypes.string.isRequired,
    port: PropTypes.number,
    basePath: PropTypes.string.isRequired,
    baseAPI: PropTypes.string.isRequired,
    tabData: PropTypes.arrayOf(
      PropTypes.shape({
        hasFormData: PropTypes.bool.isRequired,
        dataObjectKey: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
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

  static defaultProps = {
    maxNoOfImages: 1
  }

  constructor(props) {
    super(props)
    this.state = {
      retrievingData: false,
      removeButton: false,
      selectedData: {},
      collectedData: []
    }
    this.toggleSubmit = this.toggleSubmit.bind(this)
    this.toggleData = this.toggleData.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.objSize = this.objSize.bind(this)
  }


  componentDidMount() {
    this.setState({
      retrieveData: false,
      removeButton: false,
      selectedData: {}
    })
    this.fetchData(true)
  }

  objSize = obj => {
    if (obj && obj.constructor !== Object) {
      console.log(obj, 'is not an object.')
      return 0
    }
    return Object.entries(obj).length
  }

  fetchData = flag => {
    if (flag) {
      const {uriHangar, baseAPI, domain} = this.props
      this.setState({retrievingData: true})
      uriHangar(baseAPI, 'read', {}, domain).then(
        res => {
          this.setState({
            collectedData: res,
            retrievingData: false
          })
        },
        err => console.log(err)
      )
    }
  }

  toggleData = id => {
    const {collectedData} = this.state
    let selectedData = {}
    collectedData.forEach((data, index) => {
      if (data._id === id) {
        selectedData = data
      }
    })
    this.setState({
      selectedData: selectedData
    })
  }

  toggleSubmit = (inputValues, key, api, action) => {
    if (key && api && action){
      const {domain, uriHangar, port} = this.props
      this.setState({retrievingData: true})
      let data = {}
      data[key] = inputValues

      console.log(data)

      uriHangar(api, action, data, domain, port, {
        maxContentLength: this.props.maxNoOfImages * 2000000
      }).then(
        results => {
          console.log(results)
          this.setState({
            retrievingData: false,
            removeButton: true
          })
          alert('Your request has been processed successfully.')
        },
        err => {
          console.log(err)
          this.setState({retrievingData: false})
        }
      )
    } else {
      console.log(`key and url values: ${key} and ${api}/${action}`)
    }
  }

  render () {
    const {tabData, basePath, baseAPI, maxNoOfImages} = this.props
    const {retrievingData, selectedData, collectedData} = this.state
    return (
      <div className='editor container-fluid'>
        <Tabs
          navtabs={tabData.map(tab => ({
            link: `${basePath}${tab.tablink}`,
            text: tab.tabtext,
          }))}
          children={null}
        />
        {retrievingData && (
          <ClipLoader
            sizeUnit='px'
            size='100'
            color='#1e416e'
            loading={retrievingData}
          />)
        || tabData.map(tab => (
            <div className='offset-1 col-sm-10'>
              <Route
                path={`${basePath}${tab.tablink}`}
                render={() => (
                  <Fragment>
                    {tab.hasFormData &&
                    <DataDialogue
                      dialogueTitle='Select one:'
                      selectSpan={this.toggleData}
                      dataTitles={collectedData}
                    />
                    }
                    {(!tab.hasFormData ||
                      tab.hasFormData && this.objSize(selectedData) > 0)
                    && (
                      <Form
                        api={baseAPI}
                        action={tab.action}
                        key={`${basePath}${tab.tablink}`}
                        dataObjectKey={tab.dataObjectKey}
                        title={tab.title}
                        inputFields={tab.inputFields}
                        retrievingData={this.state.retrievingData}
                        removeButton={this.state.removeButton}
                        maxNoOfImages={maxNoOfImages}
                        toggleSubmit={this.toggleSubmit}
                        hasFormData={tab.hasFormData}
                        currentData={selectedData}
                      />
                    )}
                  </Fragment>
                )}
              />
            </div>
          )
        )}
      </div>
    )
  }
}

export default Editor
