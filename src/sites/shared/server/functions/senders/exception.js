import initialAppState from '../../../app/constants/initial-app-state'
import indexRenderer from '../renderers'

function exceptionSender({
  // exception,
  res,
  url,
  device,
  visitorState,
  appRenderer,
  robots,
}) {
  const initialState = {
    app: {
      ...initialAppState,
      lang: 'pl',
      device,
    },
    links: {
      root: { path: '/' },
    },
    render: {
      visitor: true,
      page: true,
      'page/not-found': true,
    },
    ...visitorState,
  }

  const appAsHtml = appRenderer(initialState)

  res.status(410).send(
    indexRenderer({
      url,
      lang: 'pl',
      title: 'Not Found',
      description: 'Not Found',
      ...appAsHtml,
      robots,
    })
  )
}

export default exceptionSender
