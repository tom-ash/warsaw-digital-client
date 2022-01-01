function getApiUrl() {
  switch (APP_ENV) {
    case 'development': return 'http://localhost:3001/soundof_it'
    case 'production': return 'https://soundof-it-red.herokuapp.com/soundof_it'
    default: return ''
  }
}

export default getApiUrl