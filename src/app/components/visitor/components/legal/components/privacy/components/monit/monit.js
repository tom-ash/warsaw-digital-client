import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { ManagedButton } from 'managed-inputs'
import { agreeManager, settingsManager } from './functions/manager'
import { languageManager } from '../../../../../../../scaffold/components/header/functions/managers'
import { textsProvider } from './functions/texts-provider'
import { changePath } from '../../../../../../../../functions/routers/change-path'

class VisitorPrivacyMonit extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.agreeManager = agreeManager.bind(this)
    this.settingsManager =  settingsManager.bind(this)
    this.languageManager = languageManager.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.textsProvider = textsProvider.bind(this)
    this.changePath = changePath.bind(this)
  }

  render() {
    const {
      language
    } = this.props

    return (
      ReactDOM.createPortal(
        <div className='cover'>
          <div
            id='visitor-privacy-monit' className={`container narrow-container shadowed${language === 'pl' ? '' : ' en'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className='text-container'>
              <div className='text-line cookies'>
                <div className='text'>
                  {this.languageObjectHandler(this.textsProvider('cookies'))}
                </div>
              </div>
              <div className='text-line'>
                <div className='text'>
                  {this.languageObjectHandler(this.textsProvider('dataProcessing'))}
                </div>
              </div>
            </div>
            <div className='buttons'>
              <ManagedButton {...this.agreeManager()} />
              <ManagedButton {...this.settingsManager()} />
            </div>
          </div>
        </div>,
        document.body
      )
    )
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(VisitorPrivacyMonit))
