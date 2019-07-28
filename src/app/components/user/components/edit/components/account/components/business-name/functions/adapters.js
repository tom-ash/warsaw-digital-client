import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getTokens } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changeBusinessName(businessName) {
  this.props.changeControl({ businessNameConnecting: true })
  const [ UST, UAT ] = getTokens()
  fetch(apiUrl + '/user/edit/business_name', {
    method: 'PUT', headers: { 'Content-Type': 'application/json', UST, UAT },
    body: JSON.stringify({ business_name: businessName })
  })
  .then(response => {
    if (response.status == 200) {
      this.props.changeControl({ businessNameStage: 'success' })
      this.props.changeData({ businessName })
      return
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ businessNameConnecting: true }))
}