import React from 'react'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'header-link' },
    label: this.labelProvider('fas fa-plus', 'Dodaj nieodpłatne ogłoszenie', 'Add free announcement'),
    onClick: () => {
      this.changeRoute({ showAnnouncementCreate: true })
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signUpManager() {
  const { name, changeApp } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'header-link' },
    label: this.labelProvider('fas fa-user-plus', 'Zarejestruj', 'Sign Up'),
    onClick: () => {
      changeApp({ showUserCreate: true })
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signInManager() {
  const {
    changeApp, resetUserAuthorizeControl, resetUserAuthorizeInputs, changeControl, resetUserAuthorizeErrors, name
  } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'header-link sign-in' },
    label: this.labelProvider('fas fa-sign-in-alt', 'Zaloguj', 'Sign In'),
    onClick: () => {
      resetUserAuthorizeErrors()
      resetUserAuthorizeInputs()
      resetUserAuthorizeControl()
      changeControl({ showLinks: false })
      changeApp({ showUserAuthorize: true })
    }
  }
}

export function myAccountManager() {
  const { changeApp, changeControl, authorized } = this.props
  
  return {
    display: !authorized && 'none',
    classNames: { container: 'header-link' },
    label: this.labelProvider('far fa-user-circle', 'Konto', 'Account'),
    onClick: () => {
      changeApp({ showUserShow: true })
      changeControl({ showLinks: false })
    }
  }
}

export function languageManager() {
  const { changeApp, language } = this.props

  return {
    classNames: { container: 'button language' },
    label: <span><i className='fas fa-globe'/> {this.languageHandler('English', 'Polski')}</span>,
    onClick: () => changeApp({ language: language === 'pl' ? 'en' : 'pl' })
  }
}
