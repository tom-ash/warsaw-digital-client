import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PanelCategories from './components/categories/categories'
import PanelVisitor from './components/visitor/visitor'
import AppContext from '../../../../../../constants/context.js'
import Area from './components/area/area.js'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  static contextType = AppContext
  
  render() {
    const {
      lang,
      renderMap,
      renderCatalogue,
      currentCategory,
      changeInputs,
      changeControl,
      categoryAmounts,
      apartmentsAmount,
      housesAmount,
      roomsAmount,
      parkingSpacesAmount,
      usablePremisesAmount,
      officesAmount,
      virtualOfficesAmount,
      coworkingAmount,
      showArea,
      areaMin,
      areaMax,
    } = this.props
    const { changeRoute } = this.context

    return (
      <div id='announcement-index-panel'>
        <PanelCategories
          renderCatalogue={renderCatalogue}
          langHandler={this.langHandler}
          changeInputs={changeInputs}
          changeControl={changeControl}
          currentCategory={currentCategory}
          changeRoute={changeRoute}
          lang={lang}
          categoryAmounts={categoryAmounts}
          apartmentsAmount={apartmentsAmount}
          housesAmount={housesAmount}
          roomsAmount={roomsAmount}
          parkingSpacesAmount={parkingSpacesAmount}
          usablePremisesAmount={usablePremisesAmount}
          officesAmount={officesAmount}
          virtualOfficesAmount={virtualOfficesAmount}
          coworkingAmount={coworkingAmount}
        />
        {(renderMap || renderCatalogue) &&
        <PanelVisitor {...{ ...this.props, changeRoute, langHandler }} />}
        <Area
          showArea={showArea}
          langHandler={this.langHandler}
          changeControl={changeControl} changeInputs={changeInputs}
          changeInputs={changeInputs}
          areaMin={areaMin}
          areaMax={areaMax}
        />
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanel))
