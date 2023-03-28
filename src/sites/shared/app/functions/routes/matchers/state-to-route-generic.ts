import getPureUrl from '../../../../shared/functions/routes/getters/pure-url'
import { syncRouteData } from '../synchronizers/route-data'
import { stateResetter } from '../setters/state-resetter'
import getCookieValue from '../../cookies/getters/get-cookie-value'
import getCookieAsBool from '../../cookies/getters/get-cookie-as-bool'
import metaSetter from '../setters/meta'
import { Dispatch } from 'redux'

interface MatchStateToRouteGeneric {
  (args: {
    clientUrl: string
    apiUrl: string
    isSSR: boolean
    customHeaders?: any // TODO
    dispatch: Dispatch
  }): void
}

export const matchStateToRouteGeneric: MatchStateToRouteGeneric = (args) => {
  const {
    clientUrl,
    apiUrl,
    isSSR,
    customHeaders,
    dispatch,
  } = args
  
  const url = getPureUrl(window.location.pathname) // TODO: This is not URL!
  const query = window.location.search

  const statisticsConsent = getCookieAsBool(getCookieValue('_pdpaf'))
  const marketingConsent = getCookieAsBool(getCookieValue('_pdpsm'))
  const consents = { statisticsConsent, marketingConsent }

  dispatch({ type: 'visitor', value: consents })

  syncRouteData.call(this, { apiUrl, url, query, isSSR, customHeaders })
  .then((syncedRouteData: any) => { // TODO: TS!
    const { state, meta } = syncedRouteData

    stateResetter({ state, dispatch })
    metaSetter({ clientUrl, url, ...meta })
  })
}