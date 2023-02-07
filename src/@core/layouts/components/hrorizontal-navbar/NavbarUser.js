// ** React Imports
import { Fragment, useState } from 'react'

// ** Dropdowns Imports
// import UserDropdown from './UserDropdown'

// ** Third Party Components
import { Sun, Moon } from 'react-feather'

// ** Reactstrap Imports
import {
  Button,
  Input,
  InputGroup,
  InputGroupText,
  NavItem,
  NavLink
} from 'reactstrap'
// import NotificationDropdown from './NotificationDropdown'
// import IntlDropdown from './IntlDropdown'
import { Link, useHistory } from 'react-router-dom'
// import { LogoHome } from '../../../../assets/images/logo'
// import { IconSearch } from '../../../../assets/images/icons'
// import NavbarSearch from './NavbarSearch'
// import ModalSignUp from '../../../ui-components/custom-modals/authentication/ModalSignUp'
// import NavbarCart from './NavbarCart'

const NavbarUser = (props) => {
  // ** Props
  const { skin, setSkin } = props
  const history = useHistory()
  // **states
  const [modal, setModal] = useState(false)

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center'>
        <ul className=' nav navbar-nav'>
          <NavItem className='nav-link-style'>
            <Link to='/home' className='navbar-brand'>
              <span className='brand-logo'>
                {/* <img src={LogoHome} alt='logo' className='nav-brand-logo' /> */}
              </span>
            </Link>
          </NavItem>
        </ul>
        <NavItem className='d-none d-xl-block '>
          <NavLink className='nav-link-style '>
            <InputGroup className='input-group-merge' style={{ minWidth: 217 }}>
              <InputGroupText className=' bg-light border-0'>
                {/* <IconSearch color='#B1B5C4' /> */}
              </InputGroupText>
              <Input
                placeholder='Search destinations or activities'
                className='text_SpunPearl_1  bg-light border-0'
              />
            </InputGroup>
          </NavLink>
        </NavItem>
      </div>
      <ul className='nav navbar-nav align-items-center ms-auto'>
        <div
          className='flex-row-center gap_17 navbar_gap '
          style={{ background: 'transparent' }}
        >
          {/* <NavbarSearch />
          <NotificationDropdown />
          <NavbarCart />
          <UserDropdown /> */}
        </div>
        <div className='d-lg-block d-none'>
          <div
            className='flex-row-center gap_17   '
            style={{ background: 'transparent', marginLeft: 17 }}
          >
            {/* <IntlDropdown /> */}
            <div style={{ height: 32, width: 1, background: '#E7ECF3' }}></div>
            <Button.Ripple
              outline
              color='primary'
              className='btn-outline-1 text4_lightOrange_6'
              onClick={() => history.push('/customer/support/help/help-qna')}
            >
              Help
            </Button.Ripple>
            <Button.Ripple
              // color='primary'
              onClick={() => history.push('/customer/choose-role')}
              className='btn-primary-2 text4_white_5'
            >
              Join as partner
            </Button.Ripple>
            <Button.Ripple
              color='primary'
              className='btn-primary-1 text4_white_5'
              onClick={() => setModal(true)}
            >
              Sign Up
            </Button.Ripple>
          </div>
        </div>
      </ul>
      {/* <ModalSignUp modal={modal} setModal={setModal} /> */}
    </Fragment>
  )
}
export default NavbarUser
