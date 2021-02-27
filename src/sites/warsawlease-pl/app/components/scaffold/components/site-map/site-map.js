import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langObjHandler from '../../../../functions/lang-handler'
import { componentDidMount } from './functions/lifecycle'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class SiteMap extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler.bind(this)
    this.componentDidMount = componentDidMount.bind(this)
  }

  render() {
    const {
      siteMapLinks
    } = this.props

    if (siteMapLinks === null) {
      return (
        <div>
          Loading Links ...
        </div>
      )
    }

    return(
      <div id='site-map' className='container'>
        {siteMapLinks.map((link, index) => (
          <a
            href={`${CLIENT_URL}/${link}`}
            key={index}
          >
            {`${CLIENT_URL}/${link}`}
          </a>
        ))}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SiteMap))
