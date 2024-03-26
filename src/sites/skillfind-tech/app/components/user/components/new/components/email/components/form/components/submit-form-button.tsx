import React from 'react'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitForm } from '../functions/submit-form'
import { useTexts } from '../../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../../shared/app/functions/store/use-inputs'

export const SubmitFormButton = () => {
  const { submitFormButtonLabel: label, termsOfServiceConsentLabel } = useTexts()
  const { emailAddress, password, termsOfServiceConsent, pictures } = useInputs()

  console.log('adadasdasd', pictures)

  const submitButtonProps = {
    label,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    submit: submitForm,
    pictures,
  }

  return <SubmitButton {...submitButtonProps} />
}
