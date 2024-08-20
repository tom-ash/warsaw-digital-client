import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

interface IconInterface {
  (props: { scale?: number; color?: string }): React.ReactElement
}

export const Icon: IconInterface = props => {
  useStyles(styles)

  const { scale, color } = props

  return (
    <div
      className='icon'
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <div
        className='lens'
        style={{
          color,
          borderColor: color,
        }}
      >
        0 1
      </div>
      <div
        className='handle'
        style={{
          background: color,
        }}
      />
    </div>
  )
}

export default Icon
