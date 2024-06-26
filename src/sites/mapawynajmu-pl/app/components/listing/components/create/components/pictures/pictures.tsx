import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PictureInput } from '../../../../../../../../shared/app/components/support/picture-input/picture-input'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useDispatch } from 'react-redux'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import s3Url from '../../../../../../../shared/constants/urls/aws-s3'
import { useErrors } from '../../../../../../../../shared/app/functions/store/use-errors'

export const PICTURES_ID = 'pictures'

export const Pictures = () => {
  useStyles(styles)

  const { picturesHeading, picturesUploadInstructions } = useTexts()
  const { id: listingId } = useData()
  const { persistedPictures } = useData()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { isPicturesError: isError } = useErrors()

  const classNames = ['pictures']
  if (isError) {
    classNames.push('error')
  }

  return (
    <div
      id={PICTURES_ID}
      className={classNames.join(' ')}
    >
      <h2>{picturesHeading}</h2>
      <PictureInput
        multiple={true}
        limit={12}
        targetWidth={1200}
        targetHeight={768}
        icon='camera'
        instructions={picturesUploadInstructions}
        persistedPictures={persistedPictures?.map((persistedPicture: { database: string }) => {
          const { database } = persistedPicture

          return {
            source: `${s3Url}/announcements/${listingId}/${database}`,
            database,
          }
        })}
        onPictureSet={pictures => {
          setInputs({ pictures })
          setErrors({ isPicturesError: false })
        }}
      />
    </div>
  )
}
