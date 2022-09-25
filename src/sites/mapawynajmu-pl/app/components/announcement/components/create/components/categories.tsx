import React from "react"
import { categories } from '../../../constants/categories'
import SVG from '../../../../../../../shared/app/components/support/svg/svg'

type CategoriesProps = {
  currentCategory: number
  changeInputs(params: { category: number }): void
  langHandler: LangHandler
}

export function Categories(props: CategoriesProps) {
  const {
    currentCategory,
    changeInputs,
    langHandler
  } = props

  return (
    <div className='categories'>
      {categories.map(category => {
        const { label: labelLangObj, pin: { svg: name }, value } = category
        // @ts-ignore
        const label = langHandler(labelLangObj)
        const classNames = ['category']
        if (currentCategory === value) { 
          classNames.push('selected')
        }

        return (
          <div
            key={label}
            className={classNames.join(' ')}
            onClick={() => {
                changeInputs({ category: value })
            }}
          >
            <div className='icon'>
              {/* @ts-ignore */}
              <SVG name={name} />
            </div>
            <div className='label'>
              {label}
            </div>
          </div>
        )
      })}
      <div className='float-clear' />
    </div>
  )
}

export default Categories
