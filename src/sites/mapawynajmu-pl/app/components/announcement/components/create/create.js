import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Pictures from './components/pictures/pictures'
import Map from './components/map/map'
import Additional from './components/additional/additional'
import Features from './components/features/features'
import Furnishings from './components/furnishings/furnishings'
import Description from './components/description/description'
import Success from './components/success/success'
import Spinner from '../../../support/components/spinner/components/windmill/windmill'
import * as lifecycle from './functions/lifecycle'
import * as managers from './functions/managers'
import { ManagedButton } from 'managed-inputs'
import { publish } from './components/publishing/functions/publish'
import { validatePictures } from './components/pictures/functions/validate-pictures'
import { validateMap } from './components/map/functions/validate-map'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import AvailabilityDate from './components/availability_date/availability_date'
import { H1, ADDITIONAL_DATA_HEADER } from './constants/texts'
import { Heading } from '../../../support/components/heading'
import UserNew from '../../../user/components/new/new'
import UserCreateEmailVerify from '../../../../../../shared/app/components/user/components/new/components/verification/verification.tsx'
import Category from './components/category'
import AreaInput from './components/area-input'
import { Line } from '../../../support/components/line/line'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
    this.userCreateNode = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.validatePictures = validatePictures.bind(this)
    this.validateMap = validateMap.bind(this)
    this.publish = publish.bind(this)
  }

  render() {
    const {
      area,
      category,
      renderForm,
      renderEdit,
      renderVerification,
      renderSuccess,
      lang,
      authorized,
      step,
      addAvailabilityDate,
      availabilityDate,
      setControl,
      setInputs,
      showPolishDescription,
      showEnglishDescription,
      polishDescription,
      englishDescription,
    } = this.props

    const availabilityDateProps = {
      lang,
      availabilityDate,
      addAvailabilityDate,
      setControl,
      setInputs,
    }

    const categoryProps = {
      currentCategory: category,
      setInputs,
    }

    const areaInputProps = {
      area,
      setInputs,
    }

    const descriptionProps = {
      showPolish: showPolishDescription,
      showEnglish: showEnglishDescription,
      polish: polishDescription,
      english: englishDescription,
      setInputs,
    }

    if (step === 'publishing')
      return (
        <section
          id='listing-create'
          className={step}
        >
          <Spinner spinnerClass='windmill-medium-spinner' />
        </section>
      )

    return (
      <section
        id='listing-create'
        className={step}
      >
        {(renderForm || renderEdit) && (
          <div id='listing-new-form'>
            {/* TODO: LANG! */}
            <h1>{H1['pl']}</h1>
            <Line />
            <form>
              <Category {...categoryProps} />
              <Line />
              <Map />
              <Line />
              <Pictures />
              <Line />
              <div id='listing-create-additional'>
                <Heading
                  tier={2}
                  text={ADDITIONAL_DATA_HEADER['pl']}
                />
                <AreaInput {...areaInputProps} />
                <Additional />
                <AvailabilityDate {...availabilityDateProps} />
                <Features />
                <Furnishings />
                <Description {...descriptionProps} />
              </div>
              <Line />
              {!authorized && (
                <div id='listing-new-user'>
                  <Heading
                    tier={2}
                    text={'Dane konta (wymagane)'} // TODO: LANG!
                  />
                  <UserNew />
                </div>
              )}
              <Line />
              <ManagedButton {...this.addAnnouncementManager()} />
            </form>
          </div>
        )}
        {renderVerification && <UserCreateEmailVerify />}
        {renderSuccess && <Success {...this.props} />}
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
