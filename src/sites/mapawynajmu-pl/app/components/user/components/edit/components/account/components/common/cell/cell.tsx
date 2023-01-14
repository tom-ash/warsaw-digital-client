import React, { useState, useContext } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import AppContext from '../../../../../../../../../constants/context'
import getAccessToken from '../../../../../../auth/components/tokens/functions/get-tokens'

export const CellContext = React.createContext(
  {} as {
    closeCell(): void
    getAccessToken(): string | null
  }
)

export enum TriggerStates {
  CLOSED = 'closed',
  OPEN = 'open',
}

interface UserEditCellProps {
  title: string
  value: string | React.ReactElement
  children: React.ReactElement | React.ReactElement[]
}

interface TriggerProps {
  trigger: string
  langHandler: LangHandler
  changeTrigger(newTrigger: TriggerStates): void
}

const TriggerSwitch = (props: TriggerProps) => {
  const { trigger, langHandler, changeTrigger } = props
  let text
  let newTrigger: TriggerStates

  if (trigger === 'closed') {
    // @ts-ignore
    text = langHandler({ pl: 'Zmień', en: 'Change' })
    newTrigger = TriggerStates.OPEN
  } else {
    // @ts-ignore
    text = langHandler({ pl: 'Anuluj', en: 'Cancel' })
    newTrigger = TriggerStates.CLOSED
  }

  return <span onClick={() => changeTrigger(newTrigger)}>{text}</span>
}

export const UserEditCell = (props: UserEditCellProps) => {
  useStyles(styles)

  const { langHandler } = useContext(AppContext)
  const [trigger, changeTrigger] = useState('closed')

  const { title, value, children } = props

  const triggerProps = {
    trigger,
    langHandler,
    changeTrigger,
  }

  const cellContext = {
    closeCell: () => changeTrigger(TriggerStates.CLOSED),
    getAccessToken,
  }

  // console.log(cellContext)

  return (
    <div className='cell'>
      <div className='current' id='current'>
        <div className='text'>
          <div>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
          </div>
        </div>
        <div className='float-clear' />
      </div>
      <div className='trigger'>
        <TriggerSwitch {...triggerProps} />
      </div>
      <div className={`edit ${trigger}`}>
        {trigger === TriggerStates.OPEN && <CellContext.Provider value={cellContext}>{children}</CellContext.Provider>}
      </div>
    </div>
  )
}