import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
const PostingCreate = loadable(() => import('./components/create/create'))
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import styles from './styles/styles.scss'
import { announcementProps } from './constants/types'

class Posting extends React.Component<announcementProps, any> {
  constructor(props: announcementProps) {
    super(props)
  }

  render() {
    const { renderCreate } = this.props

    return (
      <div id='announcement'>
        {/* @ts-ignore */}
        {renderCreate && <PostingCreate />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Posting))
