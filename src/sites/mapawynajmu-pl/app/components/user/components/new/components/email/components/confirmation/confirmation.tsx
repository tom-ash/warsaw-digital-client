import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useStore } from 'react-redux'
import { Line } from '../../../../../../../support/components/line/line'
import { Link } from '../../../../../../../announcement/components/common/link/link'
import SVG from '../../../../../../../support/components/svg/svg'

const Confirmation = () => {
  useStyles(styles)

  const {
    texts,
    user: { accountType, businessName },
  } = useStore().getState()
  const { h1, congratulations, accountCreated, partnerPage } = texts
  const partnerPageLinkProps = {
    track: 'user/index/partner',
  }
  const listingCreateFormLinkProps = {
    track: 'announcement/create/form',
  }
  const listingIndexUserLinkProps = {
    track: 'announcement/index/user',
  }
  const rootLinkProps = {
    track: 'root',
  }

  return (
    <div id='user-new-confirmation'>
      <h1>{h1}</h1>
      <Line />
      <div>{congratulations}</div>
      <div className='checkmark-circle-container'>
        <div className='checkmark-circle'>
          {/* @ts-ignore */}
          <SVG name='check' />
        </div>
        <div>{accountCreated}</div>
      </div>
      {accountType === 'business' && (
        <>
          <Line />
          <div>
            <div className='partner-page'>
              {partnerPage} <strong>{businessName}</strong>
            </div>
            <div className='partner-page-link'>
              <Link {...partnerPageLinkProps} />
            </div>
          </div>
        </>
      )}
      <Line />
      <div className='links'>
        <Link {...listingCreateFormLinkProps} />
        <Link {...listingIndexUserLinkProps} />
        <Link {...rootLinkProps} />
      </div>
    </div>
  )
}

export default Confirmation