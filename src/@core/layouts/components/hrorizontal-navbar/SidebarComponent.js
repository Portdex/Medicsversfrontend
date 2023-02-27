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
// import { LogoHome } from '../../../../assets/images/logo'
// import { En, IconDownArrow, IconGlobe } from '../../../../assets/images/icons'
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
                  {/* <h2 className='brand-text mb-0'>MedicsVerse</h2> */}
                </span>
              </Link>
            </NavItem>
          </ul>
        </OffcanvasHeader>
        <hr />

        <OffcanvasBody>
          <div className='flex-col-start justify-content-between h-100'>
            <div className='flex-col-center w-100'>
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
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default SidebarComponent
