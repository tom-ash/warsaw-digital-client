import React from 'react'
import { DragAndDrop } from './components/drag-and-drop/drag-and-drop'
import { Blobs } from './components/blobs/blobs'

interface PictureInputInterface {
  (props: { icon: string; multiple?: boolean; instructions: string }): React.ReactElement
}

export const PictureInput: PictureInputInterface = props => {
  const { icon, multiple, instructions } = props

  return (
    <div className='picture-input'>
      <DragAndDrop
        icon={icon}
        multiple={multiple}
        instructions={instructions}
      />
      <Blobs />
    </div>
  )
}
