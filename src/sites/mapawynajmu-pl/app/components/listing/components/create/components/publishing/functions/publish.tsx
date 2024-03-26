import scrollToElement from '../../../../../../../../../shared/app/functions/screen/scrollers/to-element'
import { requiredInputs, requiredInputsArray } from '../../../constants/required-inputs'
import { buildUserObject } from '../../../../../../user/components/new/components/email/components/form/functions/build-user-object'
import buildAnouncement from '../../../functions/build-announcement'
import { mapValidator } from '../../../functions/validators/map.validator'

export function publish(addPromotion: boolean = false) {
  const {
    authorized,
    setControl,
    setData,
    setErrors,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    latitude,
    longitude,
    // @ts-ignore
  } = this.props

  const announcementObject = {
    // category: this.categoryManager().validate(),
    // @ts-ignore
    // pictures: this.validatePictures(),
    // map: mapValidator({
    //   lat: latitude,
    //   lng: longitude,
    //   setErrors,
    // }),
  }

  // @ts-ignore
  const announcement = { ...buildAnouncement.call(this), addPromotion }
  const user = authorized
    ? {}
    : buildUserObject({
        accountType,
        businessName,
        emailAddress,
        password,
        countryCode,
        phoneNumber,
        termsOfServiceConsent,
        termsOfServiceConsentLabel,
        setErrors,
      })

  if (!Object.values(announcementObject).every(element => element)) {
    for (let i = 0; i < requiredInputsArray.length; i++) {
      // @ts-ignore
      if (!announcementObject[requiredInputsArray[i]]) {
        setControl({ connecting: false })

        // @ts-ignore
        return scrollToElement(document.getElementById(requiredInputs[requiredInputsArray[i]].id), 12, -120)
      }
    }
  }

  if (!authorized && !user) {
    setControl({ connecting: false })

    return scrollToElement(document.getElementById('user-new-email-first-name'), 12, -160)
  }

  // @ts-ignore
  window.gtag('event', 'listing_added')

  if (addPromotion) {
    // @ts-ignore
    window.gtag('event', 'promotion_added')
  }

  setData({ announcement, user })
  setControl({ connecting: false, step: 'publishing' })
}
