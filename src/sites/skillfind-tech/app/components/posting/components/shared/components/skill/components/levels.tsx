import React from 'react'
import { SkillView } from '../skill.types'
import { SkillLevel } from '../skill.types'

interface SkillLevelsProps {
  view: SkillView
  name: string
  level: number
  levelNames: string[]
  levelName: SkillLevel
  levelHovered: number
  selectSkill(props: object): void
  setLevelHovered(levelHovered: number): void
}

export const SkillLevels = (props: SkillLevelsProps) => {
  const { view, name, level, levelNames, levelName, levelHovered, selectSkill, setLevelHovered } = props

  return (
    <div className='levelNames'>
      {levelNames.map((availableLevel, index) => {
        const fillClass = levelHovered
          ? levelHovered > index
            ? levelNames[levelHovered - 1].toLowerCase()
            : ''
          : level > index || levelHovered > index
          ? levelName.toLowerCase()
          : ''
        const classNames = ['level', fillClass]
        const sharedLevelProps = { className: classNames.join(' '), key: availableLevel }
        const formProps = {
          onMouseOver: () => setLevelHovered(index + 1),
          onMouseLeave: () => setLevelHovered(0),
          onClick: () => selectSkill({ name, level: levelHovered }),
        }

        return (
          <div
            {...sharedLevelProps}
            {...((view === SkillView.formSelectable || view === SkillView.formSelected) && formProps)}
          />
        )
      })}
      <div className='float-clear' />
    </div>
  )
}
