import React from 'react'
import { TextInput } from '../../../../../../../../../../shared/app/components/support/text-input-semanticize/text-input'
import { validateFirstName } from './validators/validate-first-name'

export const FirstName = () => {
  return (
    <TextInput
      inputKey='firstName'
      required={true}
      validate={validateFirstName}
    />
  )
}
