export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    authorized: store.user.authorize.data.authorized
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value})
  }
}
    