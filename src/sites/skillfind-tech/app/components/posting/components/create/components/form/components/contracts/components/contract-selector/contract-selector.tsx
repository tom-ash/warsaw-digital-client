import React from 'react'
import { ContractCheckbox } from './components/checkbox'
import { NumberInput } from './components/number-input'
import { useDispatch } from 'react-redux'
import { useInputs } from '../../../../../../../../../../../../shared/app/functions/store/use-inputs'
import { SVG } from '../../../../../../../../../../../../shared/app/components/support/svg/svg'

interface ContractSelectorInterface {
  name: string
  label: string
  checked: boolean
  instructions: string
  minPlaceholder: string
  maxPlaceholder: string
}

export const ContractSelector = (props: ContractSelectorInterface) => {
  const { name, label, checked, instructions, minPlaceholder, maxPlaceholder } = props

  const dispatch = useDispatch()
  const { [`${name}Min`]: valueMin, [`${name}Max`]: valueMax } = useInputs()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setMin = (value: string) => setInputs({ [`${name}Min`]: value })
  const setMax = (value: string) => setInputs({ [`${name}Max`]: value })

  return (
    <div className='contract-selector'>
      <ContractCheckbox
        name={name}
        label={label}
      />
      {checked && (
        <div>
          <div className='instructions'>{instructions}</div>
          <NumberInput
            value={valueMin}
            placeholder={minPlaceholder}
            onChange={setMin}
          />
          <SVG name='minus' />
          <NumberInput
            value={valueMax}
            placeholder={maxPlaceholder}
            onChange={setMax}
          />
        </div>
      )}
    </div>
  )
}
