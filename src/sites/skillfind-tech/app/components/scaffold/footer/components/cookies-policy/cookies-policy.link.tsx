import React from 'react'
import { DeprecatedLink } from '../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const CookiesPolicyLink = () => {
  const linkProps = {
    linkKey: 'visitor/cookies-policy',
    customClassNames: 'link',
  }

  return <DeprecatedLink {...linkProps} />
}
