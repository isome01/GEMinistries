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
    centerElement: PropTypes.func,
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
      <div className='collage-section'>
        {modalView && currentView && (
          <Modal
            isZoomed={window.screen.width > 1000}
            className='offset-md-3 col-md-6 offset-sm-2 col-sm-8 offset-xs-0 col-xs-12'
            title={`Zoomed in`}
            toggleRender={this.toggleModal}
            positionFunc={this.props.centerElement}
            clientScrollEnabled
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
          pastEvents.filter(event => event.attachment).map(event => (
            <div className='collage-event' style={{fontFamily: 'Audrey, Helvetica, Sans-Serif'}}>
              <div className='row'>
                <div className='container-fluid collage-row-desc'>
                  <hr />
                  <h5>
                    <b>
                    {event.title}&nbsp;- From:&nbsp;{convertDate(event.startDate)} - {
                      convertDate(event.endDate)}
                    </b>
                  </h5>
                  <br />
                  <p style={{display: 'block'}}>
                    {event.description}
                  </p>
                </div>
              </div>
              <div className='row collage-row'>
                {
                  event['attachment'] && (
                    event.attachment.split(',').map(image => (
                      <div className='text-center collage-row-item col-lg-4 col-md-4 col-sm-4' onClick={this.toggleModal}>
                        <DynamicImg
                          title={event.title}
                          dataList={[{
                            path: getImage(image),
                            name: event.title
                          }]}
                          showTitle={false}
                          showCaption={false}
                          imageStyle={{
                            display: 'block',
                            height: 275,
                            borderRadius: 15
                          }}
                          passingLink={image}
                        />
                      </div>
                    ))
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CollageFragment
