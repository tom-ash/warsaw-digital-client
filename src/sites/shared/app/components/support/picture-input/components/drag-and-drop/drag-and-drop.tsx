import React from 'react'
import { SVG } from '../../../svg/svg'
import { useDispatch } from 'react-redux'
import { setPictures } from './functions/set-pictures'

interface DragAndDropInterface {
  (props: { icon: string; multiple?: boolean; instructions: string }): React.ReactElement
}

export const DragAndDrop: DragAndDropInterface = props => {
  const { icon, multiple, instructions } = props

  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <div className='drag-and-drop-container'>
      <div className='drag-and-drop'>
        <SVG name={icon} />
        <input
          type='file'
          multiple={multiple}
          onChange={e => setPictures({ e, setInputs })}
        />
      </div>
      <p className='instructions'>{instructions}</p>
    </div>
  )
}
