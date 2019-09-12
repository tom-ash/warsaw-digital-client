import React from 'react'
import { connect } from 'react-redux'
import { componentDidMount } from './functions/lifecycle'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import { monitProvider } from './functions/monit-provider'
import * as managers from './functions/managers'
import * as adapters from './functions/adapters'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'

class UserEditAccountEmail extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount.bind(this)
    this.monitProvider = monitProvider.bind(this)
    this.currentEmailVerificationManager = managers.currentEmailVerificationManager.bind(this)
    this.newEmailAddressManager = managers.newEmailAddressManager.bind(this)
    this.newEmailVerificationManager = managers.newEmailVerificationManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.sendCurrentEmailAddress = adapters.sendCurrentEmailAddress.bind(this)
    this.sendCurrentEmailVerification = adapters.sendCurrentEmailVerification.bind(this)
    this.sendNewEmailAddress = adapters.sendNewEmailAddress.bind(this)
    this.sendNewEmailVerification = adapters.sendNewEmailVerification.bind(this)
    this.sendPassword = adapters.sendPassword.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  render() {
    return (
      <div id='user-edit-email-button'>
        <div className='monit'>
          {this.monitProvider()}
        </div>
        <ManagedText manager={this.currentEmailVerificationManager} />
        <ManagedText manager={this.newEmailAddressManager} />
        <ManagedText manager={this.newEmailVerificationManager} />
        <ManagedText manager={this.passwordManager} />
        <ManagedButton manager={this.buttonManager} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccountEmail)