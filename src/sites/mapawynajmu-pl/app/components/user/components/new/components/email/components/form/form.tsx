import React from 'react'
import Hint from '../../../../../../../support/components/hint/hint'
import { AccountType } from '../../../../../../types/user.types'
import { AccountTypeRadio } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/account-type/account-type.radio'
import { BusinessNameInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/business-name/business-name.input'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { CountryCodeSelect } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/country-code/country-code.select'
import { PhoneNumberInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/phone-number/phone-number.input'
import { TermsOfServiceConsent } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent'
import { SignUpButton } from './components/sign-up-button'
import { Heading } from '../../../../../../../support/components/heading'
import { Line } from '../../../../../../../support/components/line/line'
import { PasswordAutoComplete } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { passwordValidator } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/password/password.validator'
import { useRender } from '../../../../../../../../../../shared/app/functions/store/use-render'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'

const UserNewEmailForm = () => {
  const { phoneNumberExplanation, headingOne } = useTexts()
  const { accountType } = useInputs()
  const userNewForm = useRender()['user/new/form']
  const isBusinessAccount = accountType === AccountType.BUSINESS
  const headingOneProps = { tier: 1, text: headingOne }

  const passwordInputProps = {
    autoComplete: PasswordAutoComplete.NEW_PASSWORD,
    validator: passwordValidator,
  }

  return (
    <form id='users-new-form'>
      {userNewForm && (
        <>
          {/* @ts-ignore */}
          <Heading {...headingOneProps} />
          <Line />
        </>
      )}
      <AccountTypeRadio />
      {isBusinessAccount && <BusinessNameInput />}
      <EmailAddressInput />
      <PasswordInput {...passwordInputProps} />
      {/* @ts-ignore */}
      <Hint text={phoneNumberExplanation} />
      <div className='country-code-phone-number-container'>
        <CountryCodeSelect />
        <PhoneNumberInput />
      </div>
      <TermsOfServiceConsent />
      {userNewForm && <SignUpButton />}
    </form>
  )
}

export default UserNewEmailForm
