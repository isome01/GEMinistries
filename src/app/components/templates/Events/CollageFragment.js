import React, {Component, Fragment} from 'react'
import DynamicImage from '../../containers/DynamicImg/DynamicImg.jsx'
import PropTypes from 'prop-types'

class CollageFragment extends Component {
  static propTypes = {
    getImage: PropTypes.func.isRequired,
    pastEvents: PropTypes.array,
    loading: PropTypes.bool
  }
  static defaultProps = {
    pastEvents: []
  }

  constructor(props) {
    super(props)
  }

  render () {
    if (loading) {
      return null
    }
    return (
      <Fragment>
        <h3 style=''>Come and explore the experiences of our past events!</h3>
        <p>... perhaps you'll find yourself joining us sooner than you think!</p>

      </Fragment>
    )
  }
}

export default CollageFragment
