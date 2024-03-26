import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'

export const CooperationMode = () => {
  useStyles(styles)

  const { cooperationModeHeading, cooperationModeLegend } = useTexts()
  const { cooperationMode, cooperationModeRadio } = useInputs()
  const { name, options } = cooperationModeRadio
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <section className='cooperation-mode'>
      <h2>{cooperationModeHeading}</h2>
      <fieldset>
        <legend>{cooperationModeLegend}</legend>
        {options.map((option: { value: string; label: string }) => {
          const { value, label } = option
          const id = `${name}_${value}`

          return (
            <div>
              <input
                type='radio'
                id={id}
                name={name}
                value={value}
                onChange={() => setInputs({ cooperationMode: value })}
                checked={cooperationMode === value}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          )
        })}
      </fieldset>
    </section>
  )
}
