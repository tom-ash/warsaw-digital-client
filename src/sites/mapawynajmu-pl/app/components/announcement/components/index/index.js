import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanel from './components/panel/panel'
import AnnouncementIndexCatalogue from './components/catalogue/catalogue'
import AnnouncementIndexMap from './components/map/map'
const AnnouncementIndexMy = loadable(() => import('./components/my/my'))
import langHandler from '../../../../functions/lang-handler'
import { parseCurrency } from '../../functions/currency-parsers'
import { parseCategoryForUrl } from '../../functions/category-parsers'
import { parseDistrictForUrl } from '../../functions/district-parsers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { componentDidUpdate } from './functions/lifecycle.js'

import AppContext from '../../../../constants/context.js'

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.parseDistrictForUrl = parseDistrictForUrl.bind(this)
    this.componentDidUpdate = componentDidUpdate
  }

  static contextType = AppContext

  render() {
    const { renderMap, renderCatalogue, renderMy } = this.props

    return (
      <div id='announcement-index'>
        {(renderMap || renderCatalogue) && <AnnouncementIndexPanel />}
        {renderMap && <AnnouncementIndexMap />}
        {renderCatalogue && <AnnouncementIndexCatalogue />}
        {renderMy && <AnnouncementIndexMy />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexSearch))