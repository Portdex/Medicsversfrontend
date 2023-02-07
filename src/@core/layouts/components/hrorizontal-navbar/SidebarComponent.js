import { useState } from 'react'
import classnames from 'classnames'
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { LogoHome } from '../../../../assets/images/logo'
import { En, IconDownArrow, IconGlobe } from '../../../../assets/images/icons'
const SidebarComponent = (props) => {
  // ** props
  const { toggleCanvasStart, canvasPlacement, canvasOpen } = props

  return (
    <div className='demo-inline-spacing wrapper vertical-layout navbar-floating footer-static vertical-overlay-menu menu-open'>
      <Offcanvas
        direction={canvasPlacement}
        isOpen={canvasOpen}
        toggle={toggleCanvasStart}
      >
        <OffcanvasHeader toggle={toggleCanvasStart}>
          <ul className=' nav navbar-nav ps-2 ms-5'>
            <NavItem className='nav-link-style'>
              <Link to='/home' className='navbar-brand'>
                <span className='brand-logo'>
                  <img src={LogoHome} alt='logo' className='nav-brand-logo' />
                </span>
              </Link>
            </NavItem>
          </ul>
        </OffcanvasHeader>
        <hr />

        <OffcanvasBody>
          <div className='flex-col-start justify-content-between h-100'>
            <div className='flex-col-center w-100'>
              <Button
                outline
                className='login-btn'
                onClick={toggleCanvasStart}
                {...(canvasPlacement === 'start' || canvasPlacement === 'end'
                  ? { block: true }
                  : {})}
              >
                <span className='text4_DarkGray200_16'>Log In</span>
              </Button>
              <Button block color='primary mt-1 mb-1'>
                Sign Up
              </Button>
              <Button.Ripple
                style={{ height: 39 }}
                block
                className='btn-primary-2'
              >
                Join as partner
              </Button.Ripple>
              <hr className='w-100' />
              <Button.Ripple block outline color='primary'>
                Help
              </Button.Ripple>
            </div>
            <div className='w-100'>
              <UncontrolledDropdown
                href='/'
                tag='li'
                className='dropdown-language nav-item'
              >
                <div className='flex-row-between gap_6'>
                  <div className='flex-row-center gap_7'>
                    <IconGlobe height={15} width={15} />
                    <span className='text4_blackC1_10'>English (EN)</span>
                  </div>
                  <div className='flex-row-center gap_10'>
                    <IconDownArrow />
                  </div>
                </div>
              </UncontrolledDropdown>
            </div>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default SidebarComponent
