import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler, langObjHandler } from '../../../../../../functions/lang-handler'
import { ManagedCheckbox, ManagedMultipleCheckbox } from 'managed-inputs'
import { addFurnishingsManager, furnishingsManager } from './functions/managers'

import { pickElementsForCategory } from '../../functions/pick-elements'

class AnnouncementCreateFurnishings extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.addFurnishingsManager = addFurnishingsManager.bind(this)
    this.furnishingsManager = furnishingsManager.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.pickElementsForCategory = pickElementsForCategory.bind(this)
  }

  render() {
    const {
      category,
      addFurnishings
    } = this.props

    if ([0, 1, 2].indexOf(category) === -1) return null

    return (
      <div id='announcement-create-furnishings'>
        <ManagedCheckbox {...this.addFurnishingsManager()} />
        {addFurnishings &&
        <>
          <div className='hint'>
            <i className='fas fa-info-circle' />
            {this.langObjHandler({
              pl: 'Elementy wybrane z listy dodawane są automatycznie w językach polskim oraz angielskim.',
              en: 'Elements selected from the list are automatically added in Polish and English languages.'
            })}
          </div>
          <div className='box-with-scroll'>
            <div className='box'>
              <ManagedMultipleCheckbox {...this.furnishingsManager()} />
            </div>
            <div className='scroll'>
              <i className='fas fa-sort'></i>
            </div>
            <div className='float-clear' />
          </div>
        </>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFurnishings)