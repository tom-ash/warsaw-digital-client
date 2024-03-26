import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/components/types/picture.interface'
import { buildUserObject } from './build-user-object'
import { postUserObject } from './post-user-object'

interface SubmitForm {
  (args: {
    lang: Lang
    emailAddress: string
    password: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setControl(args: { connecting: boolean }): void
    setErrors(args: any): void // TODO
    pictures?: Picture[]
  }): void
}

export const submitForm: SubmitForm = args => {
  const {
    pictures,
    lang,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setControl,
    setErrors,
  } = args

  const userObject = buildUserObject({
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    pictures,
    setErrors,
  })

  if (!userObject) return setControl({ connecting: false })

  postUserObject({ userObject, lang })
}
