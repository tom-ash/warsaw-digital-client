import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorLegalProvision extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { langHandler } = this.props

    return (
      <div className={`provision ${this.props.data.tier}`}>
        <div className='indent' />
        <div className='mark'>
          {this.props.data.item}
        </div>
        <div className='text'>
          {langHandler({ pl: this.props.data.pl, en: this.props.data.en })}
        </div>
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorLegalProvision))