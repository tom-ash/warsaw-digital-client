import React from 'react'

export default function Picture(props) {
  const {
    getPicture,
    changePicture,
    showAnnouncement,
    phoneSwitchProvider,
    parseAvailabilityDate,
    venue,
    availability_date
  } = props

  return (
    <div
      style={{ backgroundImage: getPicture() }}
      onClick={() => showAnnouncement()}
      className={`picture ${venue}`}
    >
      {phoneSwitchProvider()}
      <div
        className='arrow left'
        onClick={(e) => changePicture(e, 'previous')}
      >
        <div className='cover'>
          <i className='fas fa-chevron-left' />
        </div>
      </div>
      <div
        className='arrow right'
        onClick={(e) => changePicture(e, 'next')}
      >
        <div className='cover'>
          <i className='fas fa-chevron-right' />
        </div>
      </div>
      <div className='calendar'>
        <i className='fas fa-calendar-alt'/>
        {parseAvailabilityDate(availability_date)}
      </div>
    </div>
  )
}