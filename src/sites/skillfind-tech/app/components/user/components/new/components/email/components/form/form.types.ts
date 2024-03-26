import { Picture } from '../../../../../../../../../../shared/app/components/support/picture-input/components/types/picture.interface'

export interface UserObject {
  emailAddress: string
  password: string
  termsOfServiceConsent: boolean
  consents: any[] // TODO
  pictures?: Picture[]
  logo?: string;
}
