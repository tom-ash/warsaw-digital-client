import React from 'react'
import ScalableVectorGraphic from '../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

export const CloseButton = ({ classNames, onClick, pathData}) => {
  const classes = ` ${classNames}` || ''

  return (
    <button
      className={`close-button${classes}`}
      onClick={onClick}
    >
      <ScalableVectorGraphic pathData={pathData} />
    </button>
  )
}
