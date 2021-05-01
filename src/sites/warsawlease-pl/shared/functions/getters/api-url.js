function getApiUrl() {
  switch (APP_ENV) {
    case 'development': return 'http://localhost:3001/warsawlease'
    case 'production': return 'https://codelumired.herokuapp.com/warsawlease'
    default: return ''
  }
}

export default getApiUrl