import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../support/components/button-spinner/button-spinner'
import { emailValidator } from '../../../../../../../functions/email-validator'
import ScalableVectorGraphic from '../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

const noError = { pl: '', en: '' }

export function emailAddressManager() {
  const { scalableVectorGraphics } = this.props
  const { label } = inputs.email

  return {
    id: 'user-logon-email-address',
    classNames: { container: 'form-input text with-icon email'},
    autoComplete: 'email',
    controlled: false,
    label: this.langObjHandler(label),
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.envelope} />,
    onChange: () => this.props.changeErrors({ emailOrPassword: noError }),
    onBlur: value => this.emailAddressManager().validate(value),
    validate: value => {
      if (!emailValidator(value).isValid) {
        this.props.changeErrors({
          emailOrPassword: {
            pl: 'Nieprawidłowy adres email lub hasło.', en: 'Invalid email address and/or password.'
          }
        })
      }
    },
    error: this.langHandler(this.props.emailOrPasswordError.pl, this.props.emailOrPasswordError.en)
  }
}

export function passwordManager() {
  const { scalableVectorGraphics } = this.props
  const { label } = inputs.password

  return {
    id: 'user-logon-password',
    autoComplete: 'current-password',
    type: 'password',
    controlled: false,
    classNames: { container: 'form-input text with-icon password'},
    label: this.langObjHandler(label),
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.lock} />,
    onChange: () => this.props.changeErrors({ emailOrPassword: noError, email: noError }),
    onBlur: value => this.passwordManager().validate(value),
    validate: (value => {
      if (value.length < 1) {
        this.props.changeErrors({
          emailOrPassword: {
            pl: 'Nieprawidłowy adres email lub hasło.', en: 'Invalid email address and/or password.'
          }
        })
        return false
      }
      return true
    }),
    error: this.langHandler(this.props.emailOrPasswordError.pl, this.props.emailOrPasswordError.en)
  }
}

export function rememberMeManager() {
  const { rememberMe } = this.props

  return {
    classNames: { container: 'form-input checkbox'},
    checked: this.props.rememberMe,
    label: this.langHandler('Zapamiętaj mnie', 'Remember me'),
    onClick: () => this.props.changeInputs({ rememberMe: !rememberMe })
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Zaloguj', en: 'Sign In' }}
        langObjHandler={this.langObjHandler}
      />
    ),
    onClick: this.logIn
  }
}
