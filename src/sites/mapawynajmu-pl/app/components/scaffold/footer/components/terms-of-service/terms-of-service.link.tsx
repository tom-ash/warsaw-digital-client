import React from 'react'
import { DeprecatedLink } from '../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const TermsOfServiceLink = () => {
  const linkProps = {
    linkKey: 'visitor/terms-of-service',
    customClassNames: 'link',
  }

  return <DeprecatedLink {...linkProps} />
}
