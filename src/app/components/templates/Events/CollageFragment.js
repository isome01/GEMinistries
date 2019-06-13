import React, {Component, Fragment} from 'react'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import PropTypes from 'prop-types'
import Article from '../../presentational/Article/Article.jsx'
import Modal from '../../presentational/Modal'
import {convertDate} from '../../../scripts'

class CollageFragment extends Component {
  static propTypes = {
    getImage: PropTypes.func.isRequired,
    pastEvents: PropTypes.array,
    loading: PropTypes.bool
  }
  static defaultProps = {
    pastEvents: [],
    loading: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      modalView: false,
      currentView: null
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal = e => {
    if (e.target.name) {
      this.setState({
        currentView: e.target
      })
    }
    const {modalView} = this.state
    this.setState({
      modalView: !modalView
    })
  }

  render () {
    const {loading, pastEvents, getImage} = this.props
    const {modalView, currentView} = this.state
    if (loading) {
      return null
    }

    return (
      <Fragment>
        {modalView && currentView && (
          <Modal
            isZoomed={window.screen.width > 1000}
            className='offset-md-3 col-md-6 offset-sm-2 col-sm-8 offset-xs-0 col-xs-12'
            title={`Zoomed in`}
            toggleRender={this.toggleModal}
            children={(
              <DynamicImg
                title={currentView.alt}
                dataList={[{
                  path: getImage(currentView.name),
                  name: currentView.alt
                }]}
                showTitle={false}
                showCaption={false}
                style={{
                  backgroundColor: '#000',
                  height: '100%',
                  width: '100%'
                }}
                className='text-center'
              /> ||
              <h2>HELLO MODAL :D</h2>
            )}
          />)
        }
        <div className='col-sm' />
        <div className='col-sm-12 text-center xioudown-banner'>
          <h3 style={{color: '#fff'}}>
            Come and explore the experiences of our past events!</h3>
          <p style={{color: '#eee'}}>
            ... perhaps you'll find yourself joining us sooner than you think!</p>
        </div>
        {
          pastEvents.map(event => (
            <div className='col-sm-12' style={{margin: '5px 0'}}>
              <hr />
              <h5 style={{margin: '20px 0', color: '#000080'}}>
                {event.title}&nbsp;- From:&nbsp;{convertDate(event.startDate)} - {
                convertDate(event.endDate)}
              </h5>
              <p style={{margin: '5px 0 25px 0', listStyleType: 'circle'}}>
                {event.description}</p>
              {
                event['attachment'] && (
                  event.attachment.split(',').map(image => (
                    <div onClick={this.toggleModal} style={{width: '33%', display: 'inline-block', cursor: 'pointer'}}>
                      <DynamicImg
                        title={event.title}
                        dataList={[{
                          path: getImage(image),
                          name: event.title
                        }]}
                        showTitle={false}
                        showCaption={false}
                        style={{
                          border: 'solid #eee 2px',
                          backgroundColor: '#000',
                          height: '275px',
                        }}
                        className='text-center'
                        passingLink={image}
                      />
                    </div>
                  ))
                )
              }
            </div>
          ))
        }
      </Fragment>
    )
  }
}

export default CollageFragment
