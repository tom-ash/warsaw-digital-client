import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import { submitPassword } from '../functions/submit-password'
import { SubmitButton } from '../../../../support/submit-button/submit-button'

export const SubmitPasswordButton = () => {
  const { state } = useStore()
  const { texts, inputs } = state
  const { submitPassword: label } = texts
  const { emailAddress: email, verificationCode, password } = inputs

  const submitButtonProps = {
    label,
    submit: submitPassword,
    email,
    verificationCode,
    password,
  }

  return <SubmitButton {...submitButtonProps} />
}