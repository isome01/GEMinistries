import React, {Component, Fragment} from 'react'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import PropTypes from 'prop-types'
import Article from '../../presentational/Article/Article.jsx'
import {convertDate} from '../../../scripts'

class CollageFragment extends Component {
  static propTypes = {
    getImage: PropTypes.func.isRequired,
    pastEvents: PropTypes.array,
    loading: PropTypes.bool
  }
  static defaultProps = {
    pastEvents: [],
    loading: false
  }

  constructor(props) {
    super(props)
  }

  render () {
    const {loading, pastEvents, getImage} = this.props
    if (loading) {
      return null
    }
    return (
      <Fragment>
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
                    <div style={{width: '33%', maxHeight: '400px', height: '400px', display: 'inline-block'}}>
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
                          height: '100%',
                          width: '100%',
                          maxHeight: '400px',
                          display: 'block'
                        }}
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
