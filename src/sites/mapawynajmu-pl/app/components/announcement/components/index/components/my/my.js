import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as managers from './functions/managers'
import Tile from '../../../common/tile/tile'
import { controlProvider } from './functions/control-provider'
import { buttonProvider } from './functions/button-provider'
import { triggerVisible } from './functions/trigger-visible'
import { extend } from './functions/extend'
import { destroy } from './functions/destroy'
import { edit } from './functions/edit'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { ManagedButton } from 'managed-inputs'

class AnnouncementIndexMy extends React.Component {
  constructor(props) {
    super(props)
    this.controlProvider = controlProvider.bind(this)
    this.buttonProvider = buttonProvider.bind(this)
    this.edit = edit.bind(this)
    this.triggerVisible = triggerVisible.bind(this)
    this.destroy = destroy.bind(this)
    this.destroyManager = managers.destroyManager.bind(this)
    this.cancelDestroyManager = managers.cancelDestroyManager.bind(this)
    this.extend = extend.bind(this)
  }

  render() {
    const { amount, offset, lang } = this.props

    const toValue = offset + 10 < amount ? offset + 10 : amount
    let whichAnnouncements = `${offset + 1} - ${toValue} ${{ pl: 'z', en: 'of' }['pl']}`
    if (offset + 1 === amount) whichAnnouncements = `${offset + 1} ${{ pl: 'z', en: 'of' }['pl']}`

    const tileComponents = {
      showPrimary: false,
    }

    return (
      <div id='listing-index-user'>
        <h1>
          <span>{{ pl: 'Moje ogłoszenia', en: 'My announcements' }['pl']}</span>
        </h1>
        {this.props.beingDeleted && (
          <div className='destroy'>
            <div className='cover' />
            <div className='monit'>
              <div className='text'>
                {{
                  pl: `Usunięte ogłoszenie nie może być przywrócone. Czy na pewno chcesz usunąć ogłoszenie Nr ${this.props.beingDeleted}. `,
                  en: `The deleted announcement cannot be restored. Are you sure you want to delete the announcement No. ${this.props.beingDeleted}`,
                }['pl']}
              </div>
              <ManagedButton {...this.cancelDestroyManager()} />
              <ManagedButton {...this.destroyManager()} />
              <div className='float-clear' />
            </div>
          </div>
        )}
        <div className='announcements'>
          {this.props.announcements &&
            this.props.announcements.map((announcement, index) => (
              <Tile
                venue='list'
                key={`${announcement.id}`}
                index={index}
                control={this.controlProvider(announcement, index)}
                first={index == 0}
                last={index == this.props.announcements.length - 1}
                id={announcement.id}
                category={announcement.category}
                pictures={announcement.pictures}
                area={announcement.area}
                netRentAmount={announcement.netRentAmount}
                netRentAmountPerSqm={announcement.netRentAmountPerSqm}
                grossRentAmount={announcement.grossRentAmount}
                grossRentAmountPerSqm={announcement.grossRentAmountPerSqm}
                rooms={announcement.rooms}
                rentCurrency={announcement.rentCurrency}
                floor={announcement.floor}
                totalFloors={announcement.totalFloors}
                availabilityDate={announcement.availabilityDate}
                lang={lang}
                path={announcement.path}
                title={announcement.title}
                locality={announcement.locality}
                sublocality={announcement.sublocality}
                name={`${announcement.id}. ${announcement.name ? ` ${announcement.name}` : ''}`}
                link={announcement.link}
                {...tileComponents}
              />
            ))}
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMy))
