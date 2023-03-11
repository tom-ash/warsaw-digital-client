import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ButtonSpinner } from '../../../../../mapawynajmu-pl/app/components/support/components/button-spinner/button-spinner'
import { ManagedButton } from 'managed-inputs'

interface SubmitButtonInterface {
  (props: {
    label: string
    submit(args: any): void
    [key: string]: any
  }): JSX.Element
}

export const SubmitButton: SubmitButtonInterface = (props) => {
  const {
    label: textLabel,
    submit,
  } = props
  const { state, dispatch } = useStore()
  const { app, control } = state
  const { lang } = app
  const { connecting } = control
  const disabled = connecting
  const classNames = { container: 'submit-button' }
  const buttonSpinnerProps = { connecting, label: textLabel }
  const label = <ButtonSpinner {...buttonSpinnerProps} />
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })

  const onClick = () => {
    setControl({ connecting: true })

    submit({
      lang,
      setControl,
      setErrors,
      ...props,
    })
  }

  const buttonProps = {
    disabled,
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}