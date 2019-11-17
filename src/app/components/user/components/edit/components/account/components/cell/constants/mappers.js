export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    businessNameStage: store.user.edit.control.businessNameStage,
    taxNumberStage: store.user.edit.control.taxNumberStage,
    phoneStage: store.user.edit.control.phoneStage,
    emailStage: store.user.edit.control.emailStage,
    passwordStage: store.user.edit.control.passwordStage,
    destroyStage: store.user.destroy.control.stage,
    businessNameCurrentValue: store.user.edit.data.businessName,
    taxNumberCurrentValue: store.user.edit.data.taxNumber,
    phonephoneCodeCurrentValue: store.user.edit.data.phoneCode,
    phoneBodyCurrentValue: store.user.edit.data.phoneBody,
    emailCurrentValue: store.user.edit.data.email
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeDestroyControl: (value) => dispatch({ type: 'user/destroy/control', value: value }),
    changeControl: (value) => dispatch({ type: 'user/edit/control', value: value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value: value }),
    resetControl: (value) => dispatch({ type: 'user/edit/control/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'user/edit/control/reset', value: value }),
    resetErrors: (value) => dispatch({ type: 'user/edit/errors/reset', value: value })
  }
}
    