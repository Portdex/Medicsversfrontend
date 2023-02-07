// ** Icons Import
import { Fragment } from 'react'
import { Heart } from 'react-feather'
import { Link } from 'react-router-dom'
import { Button, CardImg, Input, InputGroup, InputGroupText } from 'reactstrap'
import { FooterImg1 } from '../../../../assets/images/card-imgs'
import './index.scss'

const Footer = () => {
  return (
    <Fragment>
      <div className='footer_position'>
        <footer>
          <div className='container'>
            <div
              className='footer-2 line'
              data-aos='fade-right'
              data-aos-duration='1050'
            >
              <h2 className='text4_DarkGray200_13'>Jobs</h2>
              <ul className='p-0'>
                <li>
                  <Link
                    tag='a '
                    to='/customer/support/help/help-qna'
                    className='text4_DarkGray500_12'
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/support/contact-us'
                    className='text4_DarkGray500_12'
                  >
                    Job search
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Recruiter directory
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Work from home
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Browse jobs
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Browse locations
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Popular searches
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Career advice
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Average salary checker
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Contact a read office
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className='footer-2 line'
              data-aos='fade-right'
              data-aos-duration='1030'
            >
              <h2 className='text4_DarkGray200_13'>Recruiter</h2>
              <ul className='p-0'>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                  Recruiter site
                  </a>
                </li>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                  Post a job
                  </a>
                </li>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                  CV search
                  </a>
                </li>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                  Recruiter agencies
                  </a>
                </li>
                <li>
                  <a href='#' className='text4_DarkGray500_12'>
                  Recruiter advice
                  </a>
                </li>
              </ul>
            </div>
            <div
              className='footer-2 line'
              data-aos='fade-right'
              data-aos-duration='1010'
            >
              <h2 className='text4_DarkGray200_13'>Courses</h2>
              <ul className='p-0'>
                <li>
                  <Link
                    tag='a'
                    to='/affilliate/inquiry'
                    className='text4_DarkGray500_12'
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/influencer/home'
                    className='text4_DarkGray500_12'
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/affilliate/affilliate-program'
                    className='text4_DarkGray500_12'
                  >
                    Find a course
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/partner/partner-join'
                    className='text4_DarkGray500_12'
                  >
                    View all subjects
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/partner/partner-join'
                    className='text4_DarkGray500_12'
                  >
                    Discount courses
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/partner/partner-join'
                    className='text4_DarkGray500_12'
                  >
                    Online courses
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/partner/partner-join'
                    className='text4_DarkGray500_12'
                  >
                    Free courses
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/partner/partner-join'
                    className='text4_DarkGray500_12'
                  >
                    Awarding body directory
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/partner/partner-join'
                    className='text4_DarkGray500_12'
                  >
                    Career guides
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a'
                    to='/partner/partner-join'
                    className='text4_DarkGray500_12'
                  >
                    Advertise a course
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className='footer-2 line'
              data-aos='fade-right'
              data-aos-duration='1010'
            >
              <h2 className='text4_DarkGray200_13' style={{whiteSpace: 'nowrap'}}>More from reed.co.uk</h2>
              <ul className='p-0'>
                <li>
                  <Link
                    tag='a '
                    to='/customer/support/help/help-qna'
                    className='text4_DarkGray500_12'
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/support/contact-us'
                    className='text4_DarkGray500_12'
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Press office
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Corporate Governance
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Modern slavery statements
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className='footer-2 line'
              data-aos='fade-right'
              data-aos-duration='990'
            >
              <h2 className='text4_DarkGray200_13'>Reed</h2>
              <ul className='p-0'>
                <li>
                  <Link
                    tag='a '
                    to='/customer/support/help/help-qna'
                    className='text4_DarkGray500_12'
                  >
                    Tempzone
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/support/contact-us'
                    className='text4_DarkGray500_12'
                  >
                    Authorise timesheets
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Group Service
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                   Global
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    tag='a '
                    to='/customer/policies/announcement'
                    className='text4_DarkGray500_12'
                  >
                    James Reed
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex-row-between my-5'>
          <div className='d-flex align-items-center gap-1'>
            <img src={FooterImg1} width={135} height={207}/>
            <div className='d-flex flex-column'>
            <span>Nail your next interview</span>
            <span>Learn how to answer 101 of the most common questions now.</span>
            <span>{`Buy James read best selling books>>`}</span>
            </div>
          </div>
          </div>
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
