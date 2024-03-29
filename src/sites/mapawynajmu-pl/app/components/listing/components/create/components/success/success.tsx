import React from 'react'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { PromoteButton } from './components/promote'
import { ListingIndexTile } from '../../../index/components/tile/tile'
import { FacebookSharerButton } from '../../../../../../../../shared/app/components/support/facebook-sharer-button/facebook-sharer-button'
import { PromotionBenefits } from '../../../common/promotion-benefits/promotion-benefits'

class AnnouncementCreateSuccess extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
  }

  render() {
    const {
      // @ts-ignore
      lang,
      // @ts-ignore
      isMobile,
      // @ts-ignore
      shareOnFacebookButtonLabel,
      // @ts-ignore
      congratulations,
    } = this.props
    const {
      id,
      title,
      pictures,
      name,
      category,
      locality,
      sublocality,
      grossRentAmount,
      netRentAmount,
      rentCurrency,
      area,
      href,
      isPromoted,
      // @ts-ignore
    } = this.props.announcement

    const isCommercial = [0, 1, 6, 7, 8].indexOf(category) !== -1
    const rentAmount = isCommercial ? netRentAmount : grossRentAmount

    const tileProps = {
      href,
      id,
      title,
      name,
      pictures,
      disableSlides: false,
      category,
      locality,
      sublocality,
      lang,
      rentAmount,
      rentCurrency,
      area,
      isPromoted,
    }

    const facebookSharerButtonProps = {
      href,
      isMobile,
      shareOnFacebookButtonLabel,
    }
    const className = isPromoted ? 'promoted' : undefined

    return (
      <div
        id='success-container'
        className={className}
      >
        <div className='further-steps'>
          <div className='congratulations'>{congratulations}</div>
          <ListingIndexTile {...tileProps} />
          <div className='promotion-actions'>
            {!isPromoted && (
              <div className='promote'>
                <PromoteButton listingId={id} />
                <PromotionBenefits />
              </div>
            )}
            <div className='share-on-facebook'>
              <FacebookSharerButton {...facebookSharerButtonProps} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementCreateSuccess)
