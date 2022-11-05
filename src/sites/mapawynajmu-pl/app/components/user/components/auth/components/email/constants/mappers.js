export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    connecting: store.user.authorize.control.connecting,
    emailError: store.user.authorize.errors.email,
    emailOrPasswordError: store.user.authorize.errors.emailOrPassword,
    rememberMe: store.user.authorize.inputs.rememberMe,
    links: store.links,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'user/authorize/control', value }),
    changeInputs: value => dispatch({ type: 'user/authorize/inputs', value }),
    changeErrors: value => dispatch({ type: 'user/authorize/errors', value }),
    changeData: value => dispatch({ type: 'user/authorize/data', value }),
  }
}