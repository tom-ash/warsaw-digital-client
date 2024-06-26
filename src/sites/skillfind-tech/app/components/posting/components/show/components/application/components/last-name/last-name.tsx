import React from 'react'
import { TextInput } from '../../../../../../../../../../shared/app/components/support/text-input-semanticize/text-input'
import { validateLastName } from './validators/validate-last-name'

export const LastName = () => {
  return (
    <TextInput
      inputKey='lastName'
      required={true}
      validate={validateLastName}
    />
  )
}
