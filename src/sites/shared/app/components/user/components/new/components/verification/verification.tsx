import React from 'react'
import { VerificationCodeInput } from './components/verification-code/verification-code'
import { Heading } from '../../../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { Line } from '../../../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { VerifyButton } from './components/submit-button/verify-button'
import { useTexts } from '../../../../../../functions/store/use-texts'

const UserNewEmailVerification = () => {
  const { headingOne, verificationCodeExplanation } = useTexts()

  return (
    <div id='users-new-email-verification'>
      <Heading
        tier={1}
        text={headingOne}
      />
      <Line />
      <div className='explanation'>{verificationCodeExplanation}</div>
      <VerificationCodeInput />
      <VerifyButton />
    </div>
  )
}

export default UserNewEmailVerification
