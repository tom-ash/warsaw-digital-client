import { routes, emptyRoutes } from '../../../shared/routes/routes'

export function matchStateToPath({ popState }) {
  const {
    changeApp,
    changePostRender
  } = this.props
  
  if (typeof window === 'undefined') return

  let path = window.location.pathname
  const newRoutes = {}

  if (path === '/dodaj-post' || path === '/add-post') {
    return changePostRender({ create: true })
  }

  for (let [key, matcher] of Object.entries(routes)) {
    if (path.match(matcher.pl.regEx) || path.match(matcher.en.regEx)) {
      newRoutes[key] = true

      if (key === 'showAnnouncementShow' || key === 'showAnnouncementEdit') {
        newRoutes.announcementId = +path.match(/\d+/)[0]
      }

      if (matcher.needsAnnouncementIndexMap) newRoutes.showAnnouncementIndexMap = true
    }
  }

  if (Object.keys(newRoutes).length === 0) {
    const {
      changePostShowData
    } = this.props

    const postUrl = window.location.pathname.slice(1)
    fetch(`${API_URL}/posts/urls/${postUrl}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      throw new Error('Page Not Found')
    })
    .then(json => {
      changeApp({ language: json.language })
      changePostShowData(json)
      changePostRender({ show: true })
    })
    .catch(error => {
      changeApp({ showNotFound: true })
    })
  }

  changeApp({ ...emptyRoutes, ...newRoutes })
}
