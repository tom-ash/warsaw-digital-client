import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PictureInput } from '../../../../../../../../shared/app/components/support/picture-input/picture-input'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'

export const Pictures = () => {
  useStyles(styles)

  const { picturesUploadInstructions } = useTexts()

  return (
    <div className='pictures'>
      <PictureInput
        icon='camera'
        multiple={true}
        instructions={picturesUploadInstructions}
      />
    </div>
  )
}
