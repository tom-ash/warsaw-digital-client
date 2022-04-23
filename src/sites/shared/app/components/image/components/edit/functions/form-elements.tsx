import React from "react"
import { ManagedTextarea, ManagedButton } from "managed-inputs"
import save from './save'
import drawOnCanvas from './draw-on-canvas'
import transformCanvasToBlob from './transform-canvas-to-blob'
import appendCanvasToBody from './append-canvas-to-body'
import compress from './compress'

interface BodyTextareaProps {
  body: string,
  changeData(props: object): void
}

export const BodyTextarea = (props: BodyTextareaProps) => {
  const { body, changeData } = props
  const classNames = { container: 'form-input textarea' }

  const textareaProps = {
    classNames,
    value: body,
    counterLimit: 10000,
    onChange: (body: object) => changeData({ body })
  }

  return <ManagedTextarea {...textareaProps} />
}

interface SaveButtonProps {
  apiUrl: string,
  imageId: number,
  body: string,
  width: string,
  height: string
}

export const SaveButton = (props: SaveButtonProps) => {
  const { apiUrl, imageId, body, width, height } = props
  const classNames = { container: 'form-input textarea' }
  const onClick = () => save({ apiUrl, imageId, body, width, height })
  const label = 'Save'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}

interface DownloadButtonProps {
  apiUrl: string,
}

export const DownloadButton = (props: DownloadButtonProps) => {
  const {
    apiUrl
  } = props

  const classNames = { container: 'form-input textarea' }
  const onClick = () => {
    drawOnCanvas()
    .then(canvas => {
      // appendCanvasToBody(canvas)
      return transformCanvasToBlob(canvas)
    })
    .then(compress)
    .then(compressedBlob => {
      const body = JSON.stringify({
        key: 'tests/test3.jpeg',
        content_type: compressedBlob.type
      })
      
      fetch(apiUrl + '/storage/s3-presigned-post', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(json => {
        let formData = new FormData()

        Object.keys(json.fields).forEach(key => { formData.append(key, json.fields[key]) })
        formData.append('file', compressedBlob)
        fetch(json.url, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
            'acl': 'public-read'
          }
        })
        .then(response => {
          console.log(response)
        })
      })
    })
  }
  const label = 'Upload'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}
