import 'react-app-polyfill/ie9'
// @ts-ignore
import Express from 'express'
import { redirectToHTTPS } from 'express-http-to-https'
// @ts-ignore
import compression from 'compression'
// @ts-ignore
import cookieParser from 'cookie-parser'
// @ts-ignore
import vhost from 'vhost'
import mapawynajmuPlRequestHandler from '../sites/mapawynajmu-pl/server/functions/request-handler'
import skillfindTechHandleRequest from '../sites/skillfind-tech/server/functions/request-handler'
import * as Sentry from '@sentry/node'
// import * as Tracing from '@sentry/tracing'

function getSentryUrl() {
  // @ts-ignore
  switch (APP_ENV) {
    case 'development':
      return 'https://ac81f10d287d4659865d2571d7be7b45@o876363.ingest.sentry.io/5825795'
    case 'production':
      return 'https://7424511ddfb441c7b6abf0fef724dc69@o876363.ingest.sentry.io/4504761753010176'
    default:
      return ''
  }
}

Sentry.init({
  dsn: getSentryUrl(),
  tracesSampleRate: 1.0,
})

// @ts-ignore
function allowCompression(req, res) {
  if (req.headers['x-no-compression']) return false

  return compression.filter(req, res)
}

const app = Express()
app.use(cookieParser())
app.use(compression({ filter: allowCompression }))

// @ts-ignore
if (['production', 'staging'].indexOf(APP_ENV) !== -1) {
  app.use(redirectToHTTPS([], [], 301))
}

app.use(vhost(/^.*(skillfind).*$/, Express.static('dist/sites/skillfind-tech/client')))
app.use(vhost(/^.*(skillfind).*$/, skillfindTechHandleRequest))

app.use(vhost(/^.*(mapawynajmu).*$/, Express.static('dist/sites/mapawynajmu-pl/client')))
app.use(vhost(/^.*(mapawynajmu).*$/, mapawynajmuPlRequestHandler))

app.listen(process.env.PORT || 8080)
