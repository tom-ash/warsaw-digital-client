import API_URL from '../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import {
  CREATE_API_ROUTE_DATA,
  CREATE_WITH_USER_API_ROUTE_DATA,
  UPDATE_API_ROUTE_DATA,
} from '../constants/api-route-data'
import setVerificationToken from '../../../../../../../shared/app/functions/cookies/setters/confirmation-token'
import { changeUrl } from '../../../../../../../shared/app/functions/routes/changers/change-url'
import { saveBlob } from '../../../../../../../shared/app/components/support/picture-input/functions/save-blob'

async function createAnnouncement() {
  // @ts-ignore
  const { authorized, renderEdit, pictures } = this.props


  const picture = pictures[0]

  console.log('picture', picture)

  const logoTrailingKey = await saveBlob({
    apiUrl: API_URL,
    // @ts-ignore
    blob: picture.blob,
    path: 'temporary',
    key: '',
    randomizeKey: true,
    fileType: 'png',
    mimeType: 'image/png',
  })


  // if (renderEdit) return update.call(this)
  // if (authorized) return create.call(this)

  // createWithUser.call(this)
}

function update() {
  // @ts-ignore
  const { lang, announcement, setControl } = this.props
  const { method, route } = UPDATE_API_ROUTE_DATA
  const accessToken = getAccessToken()
  // @ts-ignore
  const id = window.location.pathname.match(/(edytuj-ogloszenie|edit-announcement)\/(\d+)/)[2]

  fetch(API_URL + route + `/${id}`, {
    method,
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
      'Access-Token': accessToken,
    },
    body: JSON.stringify({ announcement }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => changeUrl({ href }))
}

function create() {
  // @ts-ignore
  const { lang, announcement } = this.props
  const { method, route } = CREATE_API_ROUTE_DATA
  const accessToken = getAccessToken()

  fetch(API_URL + route, {
    method,
    // @ts-ignore
    headers: { 'Content-Type': 'application/json', Lang: lang, 'Access-Token': accessToken },
    body: JSON.stringify({ announcement }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => changeUrl({ href }))
}

function createWithUser() {
  // @ts-ignore
  const { lang, announcement, user } = this.props
  const { method, route } = CREATE_WITH_USER_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ announcement, user: { ...user } }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(jsonResponse => {
      const { verificationToken, href } = jsonResponse

      setVerificationToken(verificationToken)
      changeUrl({ href })
    })
}

export default createAnnouncement
