import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changePhone(phoneCode, body) {
  this.props.changeControl({ phoneConnecting: true })
  const access_token = getAccessToken()
  fetch(apiUrl + '/user/edit/phone', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token
    },
    body: JSON.stringify({ phone_code: phoneCode, body })
  })
  .then(response => {
    if (response.status == 200) {
      this.props.changeData({ phoneCode: phoneCode, phoneBody: body })
      this.props.changeInputs({ phoneCode: phoneCode })
      this.props.changeControl({ phoneStage: 'success' })
      return
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ phoneConnecting: false }))
}