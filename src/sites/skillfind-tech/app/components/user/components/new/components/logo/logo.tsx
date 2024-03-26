import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PictureInput } from '../../../../../../../../shared/app/components/support/picture-input/picture-input'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'

export const Logo = () => {
  useStyles(styles)

  const { logoUploadInstructions } = useTexts()

  return (
    <div className='logo'>
      <PictureInput
        icon='camera'
        instructions={logoUploadInstructions}
      />
    </div>
  )
}
