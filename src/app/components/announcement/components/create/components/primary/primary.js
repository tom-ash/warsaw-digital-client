import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedSelect } from 'managed-inputs'
import { ManagedText } from 'managed-inputs'
import * as managers from './functions/managers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { handleErrorOnSelect, handleErrorOnValidate } from './functions/errors-handler'
import { onSelectHandler } from './functions/on-select-handler'
import Calendar from 'react-calendar';
import { componentDidMount } from './functions/lifecycle'
import { parseDate } from '../../../../../../functions/date-parsers'
import { labelProvider } from '../../../../../../functions/providers/label'
import './styles/styles.scss'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.rentAmountManager = managers.rentAmountManager.bind(this)
    this.additionalFeesManager = managers.additionalFeesManager.bind(this)
    this.areaManager = managers.areaManager.bind(this)
    this.roomsManager = managers.roomsManager.bind(this)
    this.floorManager = managers.floorManager.bind(this)
    this.totalFloorsManager = managers.totalFloorsManager.bind(this)
    this.handleErrorOnSelect = handleErrorOnSelect.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.onSelectHandler = onSelectHandler.bind(this)
    this.availabilityDateSelectManager = managers.availabilityDateSelectManager.bind(this)
    this.availableDateManager = managers.availableDateManager.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }
  
  render() {
    return (
      <div id='announcement-create-primary' className='section'>
          <ManagedSelect manager={this.categoryManager}/>
          <ManagedSelect manager={this.districtManager}/>
          <ManagedSelect manager={this.rentCurrencyManager}/>
          <ManagedText manager={this.rentAmountManager}/>
          <div className='float-clear'/>
          <ManagedSelect manager={this.additionalFeesManager}/>
          <ManagedText manager={this.areaManager}/>
          <ManagedSelect manager={this.roomsManager}/>
          <ManagedSelect manager={this.floorManager}/>
          <ManagedSelect manager={this.totalFloorsManager}/>
          <div className={this.props.availabilityDateSelect == 'date' ? 'date' : ''}>
          <ManagedSelect manager={this.availabilityDateSelectManager} />
          {
          this.props.availabilityDateSelect == 'date' &&
          <ManagedSelect manager={this.availableDateManager}/>
          }
          <div className='float-clear' />
          </div>
          <div
          style={{ display: this.props.availabilityDateFocus ? 'block' : 'none' }}
          className='calendar'>          
            <Calendar 
            onChange = {(date) => {
              console.log(date)
              this.props.changeInputs({ availabilityDate: parseDate(date) })
              this.props.changeControl({ availabilityDateFocus: false })
            }}
            locale={this.props.language == 'polish' ? 'pl' : 'en'}/>
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePrimary);