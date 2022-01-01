export const mapStateToProps = store => {
  const {
    lang,
    path
  } = store.app

  const {
    'user/create': renderCreate,
    'user/edit': renderEdit,
    'user/reset-password': renderEditPassword,
    'user/authorize': renderAuthorize
  } = store.render

  return {
    lang,
    renderCreate,
    renderEdit,
    renderEditPassword,
    renderAuthorize
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeAnnouncementControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
  }
}
    