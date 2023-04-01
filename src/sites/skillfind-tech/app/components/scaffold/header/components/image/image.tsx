import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const LogoImage = () => {
  useStyles(styles)

  return (
    <div id='logo-image'>
      <div className='magnifying-glass'>
        <div className='zero-one'>
          <span className='zero'>0</span>
          <span className='one'>1</span>
        </div>
      </div>
      <div className='handle' />
    </div>
  )
}

export default LogoImage
