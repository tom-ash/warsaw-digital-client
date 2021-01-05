const fetch = require("node-fetch")
import { appState } from '../../../app/constants/app-state'
import { parseScalableVectorGraphics } from '../../../shared/functions/parsers/parse-scalable-vector-graphics'
import routeRenders from '../../../shared/constants/routes/renders'

export function genericResponseInitializer({
  route,
  device
}) {
  const {
    lang: language,
    track,
    title,
    description,
    keywords,
  } = route

  return (
    fetch(API_URL + `/scalable_vector_graphics`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(json => {
      return {
        title,
        description,
        keywords,
        initialState: {
          app: {
            ...appState,
            language,
            device,
            scalableVectorGraphics: parseScalableVectorGraphics(json)
          },
          render: {
            [track]: true,
            ...routeRenders[track]
          }
        }
      }
    })
  )
}