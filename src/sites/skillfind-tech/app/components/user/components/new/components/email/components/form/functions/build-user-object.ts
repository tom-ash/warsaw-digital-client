import { UserObject } from '../form.types'
import { validateUserObject } from './validate-user-object'
import { hashPassword } from '../../../../../../../../../../../shared/app/components/user/functions/hash-password'
import { termsOfServiceConsentParser } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent.parser'
import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/components/types/picture.interface'

interface BuildUserObject {
  (args: {
    emailAddress: string
    password: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    pictures?: Picture[];
    setErrors(args: object): void
  }): UserObject | undefined
}

export const buildUserObject: BuildUserObject = args => {
  const { emailAddress, password, termsOfServiceConsent, termsOfServiceConsentLabel, pictures, setErrors } = args

  let userObject: UserObject = {
    emailAddress,
    password,
    termsOfServiceConsent,
    consents: [],
    pictures,
  }

  const userObjectInvalid = !validateUserObject({ userObject, setErrors })

  if (userObjectInvalid) return

  userObject.password = hashPassword(userObject.password, userObject.emailAddress)
  userObject.consents = [termsOfServiceConsentParser(termsOfServiceConsentLabel)]

  return userObject
}
