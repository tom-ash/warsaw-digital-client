import apiUrl from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'

type SubmitProps = {
  lang: Lang
  businessName: string
  industry: string
  selectedSkills: Array<any>
  cooperationMode: string
  b2b: boolean
  b2bMin: number
  b2bMax: number
  employment: boolean
  employmentMin: number
  employmentMax: number
  placeId: string
  placeAutocomplete: string
  lat: number
  lng: number
  country: string | undefined
  locality: string | undefined
  sublocality: string | undefined
}

export const submit = (props: SubmitProps) => {
  const {
    lang,
    businessName,
    selectedSkills,
    cooperationMode,
    b2b,
    b2bMax,
    b2bMin,
    industry,
    employment,
    employmentMax,
    employmentMin,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
  } = props

  const body = {
    businessName,
    selectedSkills,
    cooperationMode,
    b2b,
    b2bMax,
    b2bMin,
    industry,
    employment,
    employmentMax,
    employmentMin,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
  }

  fetch(apiUrl + '/postings', {
    method: 'POST',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      Lang: lang,
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => {
      changeUrl({ href })
    })
}
