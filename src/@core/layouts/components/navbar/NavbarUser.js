// ** React Imports
import { Fragment } from 'react'

// ** Dropdowns Imports
import UserDropdown from './UserDropdown'

// ** Third Party Components
import { Sun, Moon, Heart } from 'react-feather'

// ** Reactstrap Imports
import { NavItem, NavLink, Button } from 'reactstrap'

const NavbarUser = (props) => {
  // ** Props
  const { skin, setSkin } = props

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
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>{/* <ThemeToggler /> */}</NavLink>
        </NavItem>
      </div>
      <ul className='nav navbar-nav align-items-center ms-auto'>
        {/* <UserDropdown /> */}
        <Button color='primary' size='sm' outline>
          <span className='text_black_2'>Register CV</span>
        </Button>
        <Button color='withe' size='sm' outline>
          <span className='text_black_2'>Sign in</span>
        </Button>
        <Button color='withe' size='sm' outline>
        <span className='text_black_2'>
          <Heart size={18} className='ficon' /> Saved Jobs
          </span>
        </Button>
      </ul>
    </Fragment>
  )
}
export default NavbarUser
