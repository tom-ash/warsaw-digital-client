import React from 'react'

interface AreaInterface {
  (props: { area: number; perSqm?: string }): React.ReactElement | null
}

export const Area: AreaInterface = props => {
  const { area } = props

  if (!area) return null

  // TODO: Handle decimal sign (, vs .)

  const multipliedAmount = `${Math.ceil(area * 100)}`
  const integerAmount = multipliedAmount.slice(0, -2)
  const decimalAmount = multipliedAmount.slice(-2)
  const amount = decimalAmount === '00' ? integerAmount : `${integerAmount},${decimalAmount}`

  return (
    <div className='area'>
      {amount} m<sup>2</sup>
    </div>
  )
}
