import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { centralManager } from './functions/central-manager'
import { initialReducerState } from '../../constants/initial-reducer-state'
import * as lifecycle from './functions/lifecycle'
import { langObjHandler } from '../../../../../../../../functions/lang-handler'
import SVG from '../../../../../../../support/components/svg/svg.js'

class UserEditAccountCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialReducerState,
      inputClass: 'inputs-container hidden'
    }
    this.centralManager = centralManager.bind(this)
    this.componentDidUpdate = lifecycle.componentDidUpdate.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    return lifecycle.getDerivedStateFromProps(props, state)
  }

  render() {
    const { svgs } = this.props
    const iconPathData = svgs && svgs[this.centralManager('icon')]

    return (
      <div className='user-edit-account-cell'>
        <div className='current'>
          <div className='icon'>
            <SVG pathData={iconPathData} />
          </div>
          <div className='text'>
            <div>
              <div className='title'>
                {this.centralManager('title')}
              </div>
              <div className='value'>
                {this.centralManager('currentValue')}
              </div>
            </div>
          </div>
          <div className='float-clear' />
        </div>
        <div
        className={this.centralManager('triggerClass')}
        onClick={this.centralManager('triggerOnClick')}>
          <div>
            {this.centralManager('triggerIcon')}          
            <span>{this.centralManager('triggerText')}</span>
          </div>
        </div>
        <div className={this.centralManager('editClass')}>
          <div className={this.state.inputClass}>
            {
            this.state.stage !== null &&
            this.centralManager('editInput')
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccountCell)