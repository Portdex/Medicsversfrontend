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

// ** Third Party Components
import { Sun, Moon, Heart } from 'react-feather'
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
            <NavItem
              className='nav-link-style'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '6px'
              }}
            >
              <Link to='/home' className='navbar-brand'>
                <h2 className='brand-text '>MedicsVerse</h2>
              </Link>
            </NavItem>
          </ul>
        </OffcanvasHeader>
        <hr />
        <OffcanvasBody>
          <div className='flex-col-start justify-content-between h-100'>
            <div className='flex-col-center w-100 gap-2 mt-5'>
              <Button block color='primary' size='md' outline>
                <span className='text_black_2'>Register CV</span>
              </Button>
              <Button block color='primary' size='md'>
                <span className='text-white'>Sign in</span>
              </Button>
            </div>
          </div>
        </OffcanvasBody>
        <div className='flex-col-center'>
          <hr className='w-100' />
          <Button color='withe' size='sm' outline>
            <span className='text_black_2'>
              <Heart size={18} className='ficon' /> Saved Jobs
            </span>
          </Button>
        </div>
      </Offcanvas>
    </div>
  )
}

export default SidebarComponent
