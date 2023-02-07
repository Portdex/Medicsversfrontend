// ** Icons Import
import { Fragment } from 'react'
import { Heart } from 'react-feather'
import { Link, useHistory } from 'react-router-dom'
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap'
import './index.scss'

const Footer = () => {
  return (
    <Fragment>
      <div className='footer_position'>
        <footer>
          <div className='container'>
            <div
              className='footer-1 line'
              data-aos='fade-right'
              data-aos-duration='1050'
            >
              <span className='text4_DarkGray200_4'>Customer Center</span>
              <p className='text4_DarkGray500_12'>
                <span className='text4_DarkGray200_12'>US Headquarters:</span>
                Monday to Friday, 24 hours <br /> Sat/Sun/Holiday, EST
                09:00–22:00 <span className='text4_DarkGray200_12'>call:</span>
                +1 212-828-0100 <br />
                <span className='text4_DarkGray200_12'>Korea Branch:</span>
                Monday to Friday, 24 hours <br /> Closed on Saturdays, Sundays,
                and Public Holidays
                <span className='text4_DarkGray200_12'>call:</span>
                070-8095-1520 <br />
                <span className='text4_DarkGray200_12'>
                  New York lounge hours
                </span>
                <br />
                Monday–Saturday 9:00–18:00
                <br /> Closed: Sundays, Memorial, Independent, Thanksgiving,
                Christmas, New year In store purchase and consultation with
                coordinator 14:00–17:00 (cash payment only)
              </p>
              <p className='text4_DarkGray200_12'>
                Very day ticket reservations and emergencies: 24/7
                Cancellation/exchange/other reception: Monday to Friday
              </p>
            </div>
            <div
              className='footer-2 line'
              data-aos='fade-right'
              data-aos-duration='1030'
            >
              <h2 className='text4_DarkGray200_13'>About</h2>
              <ul className='p-0'>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                    About Athometrip
                  </a>
                </li>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                    Location
                  </a>
                </li>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                    Career
                  </a>
                </li>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            <div
              className='footer-2 line'
              data-aos='fade-right'
              data-aos-duration='1010'
            >
              <h2 className='text4_DarkGray200_13'>Services</h2>
              <ul className='p-0'>
                <li>
                  <Link
                    tag='a'
                    to='/affilliate/inquiry'
                    className='text4_DarkGray500_12'
                  >
                    Affilliate Inquiry
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/influencer/home'
                    className='text4_DarkGray500_12'
                  >
                    Influencer Program
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/affilliate/affilliate-program'
                    className='text4_DarkGray500_12'
                  >
                    Affilliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/partner/partner-join'
                    className='text4_DarkGray500_12'
                  >
                    Join as Partner
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className='footer-2 line'
              data-aos='fade-right'
              data-aos-duration='1010'
            >
              <h2 className='text4_DarkGray200_13'>Support</h2>
              <ul className='p-0'>
                <li>
                  <Link
                    tag='a '
                    to='/customer/support/help/help-qna'
                    className='text4_DarkGray500_12'
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/support/contact-us'
                    className='text4_DarkGray500_12'
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Announcement
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className='footer-3 line'
              data-aos='fade-right'
              data-aos-duration='990'
            >
              <span className='text4_DarkGray200_13'>
                Get exclusive deals sent straight to your inbox
              </span>
              <li className='mt_10'>
                <span>
                  <i className='fa fa-map-marker' aria-hidden='true'></i>
                </span>
                <span className='text4_DarkGray200_9'>
                  By clicking Subscribe, you have agreed to our
                  <span className='text4_lightOrange_9'>
                    Terms & Conditions
                  </span>
                  and
                  <span className='text4_lightOrange_9'>Privacy Policy</span>
                </span>
              </li>
              <li className='mt_10'>
                <InputGroup
                  className='flex-row-between'
                  style={{ border: 'none', width: 257 }}
                >
                  <InputGroupText className='p-0' style={{}}>
                    <Input
                      placeholder='Enter your email address'
                      style={{ border: 'none', backgroundColor: '#F4F5F6' }}
                    />
                    <Button.Ripple block className='subscribe-btn'>
                      <span className='text3_white_2'>Subscribe</span>
                    </Button.Ripple>
                  </InputGroupText>
                </InputGroup>
              </li>
              <li>
                <div className='flex-col-start mt_10'>
                  <span className='text4_DarkGray200_14'>
                    Payment&nbsp;Channel
                  </span>
                  <div className='flex-row-between mt_10'>
                    {/* <IconMasterCard />
                    <IconVisaCard />
                    <IconAmericanExpress />
                    <IconPaypal />
                    <IconApplePay /> */}
                  </div>
                </div>
              </li>
            </div>
          </div>
          <hr />
        </footer>
        <div className='copyright'>
          <div className='d-flex flex-lg-row gap-md-4 flex-xs-col-center'>
            <div className='flex-lg-row flex-sm-column flex-xs-col-center align-items-center d-flex gap-2 '>
              <Link
                tag='a'
                to='/customer/policies/terms-condition'
                className='text4_DarkGray500_12'
              >
                Terms and Conditions
              </Link>

              <span className='text4_DarkGray500_12'>Privacy Policy</span>
              <span className='text4_DarkGray500_12'>
                Cancellation and Refund Policy
              </span>
            </div>
            <div className='d-flex align-items-center flex-lg-row flex-sm-column flex-xs-col-center  gap-1'>
              <div className='gap_15 d-flex'>
                {/* <IconSocial1 />
                <IconApple />
                <IconInsta />|
                <IconPlaystore />
                <IconYoutube /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
