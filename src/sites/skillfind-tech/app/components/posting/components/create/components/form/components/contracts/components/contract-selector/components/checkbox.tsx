import React from 'react'
import { useDispatch } from 'react-redux'
import { useInputs } from '../../../../../../../../../../../../../shared/app/functions/store/use-inputs'
import { ManagedCheckbox } from 'managed-inputs'

interface ContractCheckboxInterface {
  name: string
  label: string
}

export const ContractCheckbox = (props: ContractCheckboxInterface) => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const { name, label } = props
  const { [name]: checked } = useInputs()
  const onClick = (value: boolean) => setInputs({ [name]: value })

  return (
    <ManagedCheckbox
      classNames={{ container: 'form-input checkbox' }}
      checked={checked}
      label={label}
      onClick={onClick}
    />
  )
}
