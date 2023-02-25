import clientUrl from '../../../constants/urls/client'
import buildUrlGeneric from '../../../../../shared/shared/functions/routes/builders/url'

export const buildUrl: BuildUrl = function (props) {
  const {
    path,
    // query,
    // fragment,
  } = props

  return buildUrlGeneric({
    clientUrl,
    path,
    // query,
    // fragment,
  })
}