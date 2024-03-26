import React from 'react'
import { ManagedText } from 'managed-inputs'
import { useDispatch } from 'react-redux'

interface NumberInputInterface {
  value: string
  placeholder: string
  onChange(value: string): void
}

export const NumberInput = (props: NumberInputInterface) => {
  const { value, placeholder, onChange } = props

  const inputProps = {
    classNames: { container: 'typed-text-input' },
    value,
    type: 'number',
    placeholder,
    onChange,
  }

  return <ManagedText {...inputProps} />
}
