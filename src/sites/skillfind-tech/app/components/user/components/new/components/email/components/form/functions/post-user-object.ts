import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import setVerificationToken from '../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token'
import { UserObject } from '../form.types'
import { changeUrl } from '../../../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/components/types/picture.interface'
import { saveBlob } from '../../../../../../../../../../../shared/app/components/support/picture-input/functions/save-blob'

interface PostUserObject {
  (args: { userObject: UserObject; lang: Lang }): void
}

export const postUserObject: PostUserObject = async args => {
  const { userObject, lang } = args
  const logo = userObject.pictures && userObject.pictures[0]

  if (logo) {
    const logoTrailingKey = await saveBlob({
      apiUrl: API_URL,
      blob: logo.blob,
      path: 'temporary',
      key: 'logo',
      randomizeKey: true,
      fileType: 'png',
      mimeType: 'image/png',
    })

    userObject.logo = logoTrailingKey
  }

  fetch(API_URL + '/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify(userObject),
  })
    .then(
      response => {
        if (response.status == 201) return response.json()

        throw new Error('Something went wrong.')
      },
      networkError => console.dir(networkError.message)
    )
    .then(jsonResponse => {
      const { verificationToken, href } = jsonResponse

      setVerificationToken(verificationToken)
      changeUrl({ href })
    })
    .catch(e => console.dir(e))
}
