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
