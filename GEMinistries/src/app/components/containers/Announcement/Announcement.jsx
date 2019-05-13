import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from "../../presentational/Article/Article.jsx"
import './style.css'

class Announcement extends Component {
  static propTypes = {
    article: PropTypes.shape({
      header: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      article: this.props.article
    }
    this.toggleOverflow = this.toggleOverflow.bind(this)
  }

  componentWillMount() {
    const {article} = this.state
    this.setState({
      article: {
        ...article,
        id: `${article.header}-${article.summary.length}`,
        overflows: article.summary.length > 200,
        allowOverflow: article.summary.length <= 200
      }
    })
  }

  toggleOverflow = e => {
    const {article}= this.state
    this.setState({
      article: {
        ...article,
        allowOverflow: !article.allowOverflow
      }
    })
    const more = '... Read More'
    const less = 'Read Less...'
    let span = document.getElementById(e.target.id)
    span.innerHTML = span.innerHTML === more ? less : more
  }

  render(){
    const {header, summary, id, overflows, allowOverflow} = this.state.article
    return (
      <div className='announcement'>
        <Article
          summaryid={id}
          header={header}
          width='1000px'
          summary={(allowOverflow
            ? summary
            : summary.slice(0, 200)) || 'No summary... :/'
          }
          children={
            (overflows &&
            <span
              id={`toggle-${header.toLowerCase()}`}
              className='article-link'
              onClick={this.toggleOverflow}
            >
              ... Read More
            </span>)
          }
        />
      </div>
    )
  }
}

export default Announcement
