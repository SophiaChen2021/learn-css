import './HotelsResult.scss';
// https://www.skyscanner.net/hotels/united-kingdom/london-hotels/ci-27544008
function HotelsResultCard() {
  return (
    <div className='HotelsResult'>
      <div className='pictureInfo'>
        <img src='https://d2xf5gjipzd8cd.cloudfront.net/available/627028555/627028555_640x504.jpg' alt='home' width='100%' height='100%'></img>
      </div>
      <div className='basicInfo'>
        {/* <a href='https://www.skyscanner.net/hotels/search?entity_id=134634850&pivot_highlight=true' calssName='link'> */}
          <div className='topSection'>
            <div className='header'> 
              <div className='title'>
                Hux Hotel
              </div>
              <div className='star'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M7.925 8.03a1.05 1.05 0 00.793-.591l2.576-5.478a.771.771 0 011.412 0l2.576 5.478a1.048 1.048 0 00.793.59l5.75.87a.835.835 0 01.437 1.407l-4.188 4.274a1.05 1.05 0 00-.287.905l.99 6.05a.795.795 0 01-1.141.869l-5.13-2.83a1.05 1.05 0 00-1.013 0l-5.13 2.83a.795.795 0 01-1.141-.87l.995-6.05a1.05 1.05 0 00-.286-.904l-4.192-4.273A.834.834 0 012.175 8.9z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M7.925 8.03a1.05 1.05 0 00.793-.591l2.576-5.478a.771.771 0 011.412 0l2.576 5.478a1.048 1.048 0 00.793.59l5.75.87a.835.835 0 01.437 1.407l-4.188 4.274a1.05 1.05 0 00-.287.905l.99 6.05a.795.795 0 01-1.141.869l-5.13-2.83a1.05 1.05 0 00-1.013 0l-5.13 2.83a.795.795 0 01-1.141-.87l.995-6.05a1.05 1.05 0 00-.286-.904l-4.192-4.273A.834.834 0 012.175 8.9z"></path></svg>
              </div>
            </div> 
            <div className='distance'>
              <div className='distanceIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M13.5 16.963a.806.806 0 01.595-.76 7.5 7.5 0 10-4.19 0 .806.806 0 01.595.76V21a1.5 1.5 0 003 0z">
                  </path>
                </svg>
              </div>
              Safestay London Kensington Holland Park
            </div>
          </div>
          <div className='rating'>
            <span className='ratingValue'>
              4.5
              <span className='ratingScale'>/5</span>
            </span>
            <span>
              Excellent
            </span>
            <span className='rating_subtitle'>
              212 reviews
            </span>
          </div>
          <div className='confidentMsg'>
            <span className='confidentItem'>
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" ><path d="M8.25 20v-8.104a2.083 2.083 0 01.144-.762l3.087-7.838A.458.458 0 0111.904 3a2.846 2.846 0 012.665 3.57l-.284 1.187A.991.991 0 0015.213 9h4.623a1.99 1.99 0 011.79 2.702l-2.17 6.054A4.797 4.797 0 0114.978 21H9.206a.979.979 0 01-.956-1zM5.7 21a1.05 1.05 0 001.05-1.05v-6.9A1.05 1.05 0 005.7 12H3.3a1.05 1.05 0 00-1.05 1.05v6.9A1.05 1.05 0 003.3 21z"></path></svg>
              </div>
             
              <span className='location'>
                Location
                <span className='msgRating'>
                  4.5
                  <span>/</span>
                  <span className='ratingScope'>
                  5
                  </span>
                </span>
              </span>
            </span>            
          </div>
          <div className='bottomSection'> 
            <div className='otherRates'>
              <a className='rateRow'>
                <div className='rateName'>
                  Trip.com
                </div>
                <span className='ratePrice'>
                £133
                </span>
              </a>
              <div className='rateRow'>
                <div className='rateName'>
                  Trip.com
                </div>
                <span className='ratePrice'>
                  £133
                </span>
              </div>
              <div className='rateRow'>
                <div className='rateName'>
                  Trip.com
                </div>
                <span className='ratePrice'>
                  £133
                </span>
              </div>
              <div className='rateRow'>
                <div className='rateName'>
                  Trip.com
                </div>
                <span className='ratePrice'>
                  £133
                </span>
              </div>
            </div>
          </div>
        {/* </a> */}
        
      </div>
      <div className='priceInfo'>
        <div className='mainRate'>
          <div className='lowestPrice'>
            lowestPrice
          </div>
          <div className='foundHotel'>
            we found for this hotel
          </div>
          <div>
            <img src="//www.skyscanner.net/images/websites/220x80/d_ct.png?t=2022" alt="Trip.com" height="19" />
          </div>
          <div className='priceLogo'>
            <div className='priceBadge'>
              <div className='loggedPrice'>
              logged in price
              </div>
            </div> 
          </div>
          <div className='priceNumber'>
            £204
          </div>
          <div className='priceSummary'>
            a night
          </div>
          <div className='priceInclude'>
            All taxes and fees included
          </div>
          <div className='ctaButton'>
            <button type='button' className='button'>
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default HotelsResultCard;