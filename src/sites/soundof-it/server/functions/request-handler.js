import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request.js'
import appRenderer from './app-renderer.js'
import ROOT_DOMAIN from '../../shared/domains/root.js'
import CLIENT_URL from '../../shared/constants/urls/client.js'
import API_URL from '../../shared/constants/urls/api.js'
import buildUrl from '../../shared/functions/routes/builders/url.js'
import siteName from '../../shared/constants/names/site.js'

function handleRequest(req, res) {
  if (req.hostname === `www.${ROOT_DOMAIN}`) return res.status(301).redirect(`https://${ROOT_DOMAIN}${req.originalUrl}`)

  genericRequestHandler({
    req,
    res,
    clientUrl: CLIENT_URL,
    apiUrl: API_URL,
    buildUrl,
    appRenderer,
    siteName
  })
}

export default handleRequest