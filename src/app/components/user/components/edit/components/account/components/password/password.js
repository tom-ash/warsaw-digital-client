import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedButton } from 'managed-inputs'
import { componentWillUnmount } from './functions/lifecycle'
import { emailManager, verificationManager, passwordManager, buttonManager } from './functions/managers'
import { sendEmail, sendVerification, sendPassword } from './functions/adapters'
import { monitProvider } from './functions/monit-provider'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { labelProvider } from '../../../../../../../../functions/providers/label'
import { CloseButton } from '../../../../../../../../components/support/components/close-button/close-button'
import { hideUser } from '../../../../../../functions/hide-user'

class UserEditAccountPassword extends React.Component {
  constructor(props) {
    super(props)
    this.componentWillUnmount = componentWillUnmount.bind(this)
    this.emailManager = emailManager.bind(this)
    this.verificationManager = verificationManager.bind(this)
    this.passwordManager = passwordManager.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.sendEmail = sendEmail.bind(this)
    this.sendVerification = sendVerification.bind(this)
    this.sendPassword = sendPassword.bind(this)
    this.monitProvider = monitProvider.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.hideUser = hideUser.bind(this)
  }

  render() {
    const { editAccount } = this.props
    
    return (
      <React.Fragment>
        <div
          id='user-edit-account-password'
          className={`${editAccount ? '' : 'container narrow-container shadowed'}`}
          onClick={e => e.stopPropagation()}
        >
          {!editAccount &&
          <h1 className='page-header'>
            <i className='fas fa-user-plus' /> {this.languageHandler('Resetowanie hasła', 'Password Resetting')}
          </h1>}
          {!editAccount && <CloseButton onClick={this.hideUser} classNames='page narrow'/>}
          <div className='inputs'>
            <div className='monit'>
              {this.monitProvider()}
            </div>
            <ManagedText key='emailAddress' {...this.emailManager()} />
            <ManagedText key='verificationCode' {...this.verificationManager()} />
            <ManagedText key='password' {...this.passwordManager()} />
            <ManagedButton key='button' {...this.buttonManager()} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccountPassword)