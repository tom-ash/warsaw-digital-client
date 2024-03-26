import React from 'react'
import { useInputs } from '../../../../../functions/store/use-inputs'
import { Picture } from '../types/picture.interface'

interface BlobsInterface {
  (): React.ReactElement
}

export const Blobs: BlobsInterface = () => {
  const { pictures } = useInputs()

  return (
    <div className='blobs'>
      {(pictures || []).map((picture: Picture) => {
        return (
          <div
            key={`${picture.blob}`}
            // style={{ backgroundImage: "url('" + URL.createObjectURL(picture.blob) + "')" }}
            className={'picture'}
          >
            <img src={URL.createObjectURL(picture.blob)} />

            {/* <div className='buttons'>
              <div
                onClick={() => this.deletePicture(index)}
                className='button delete'
              >
                <SVG name='close' />
              </div>
              {this.props.blobs && index !== 0 && (
                <div
                  onClick={() => this.movePicture('up', index)}
                  className='button up'
                >
                  <SVG name='chevron' />
                </div>
              )}
              {this.props.blobs && this.props.blobs.length !== index + 1 && (
                <div
                  onClick={() => this.movePicture('down', index)}
                  className='button down'
                >
                  <SVG name='chevron' />
                </div>
              )}
              {!picture.database && (
                <div
                  onClick={() => this.rotatePicture(index)}
                  className='button rotate'
                >
                  <SVG name='rotate' />
                </div>
              )}
            </div> */}
          </div>
        )
      })}
    </div>
  )
}
