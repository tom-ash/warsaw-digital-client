import React from 'react'

export const AreaPresenter = ({
  area,
  langObjHandler
}) => (
  <div className='area'>
    <div className='amount'>
      {area}
    </div>
    {langObjHandler({
      pl: (
        <React.Fragment>
          <div className='m'>
            m
          </div>
          <div className='sq'>
            2
          </div>
        </React.Fragment>
      ),
      en: (
        <div className='m'>
          sqm
        </div>
      )
    })}
    <div className='float-clear' />
  </div>
)