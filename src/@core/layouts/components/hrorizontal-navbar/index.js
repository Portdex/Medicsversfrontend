// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import NavbarUser from './NavbarUser'

// ** Third Party Components
import { Menu } from 'react-feather'

// ** Reactstrap Imports
import { NavItem, NavLink } from 'reactstrap'
import SidebarComponent from './SidebarComponent'

const ThemeNavbar = (props) => {
  // ** Props
  const { skin, setSkin } = props
  const [canvasPlacement, setCanvasPlacement] = useState('start')
  const [canvasOpen, setCanvasOpen] = useState(false)

  const toggleCanvasStart = () => {
    setCanvasPlacement('start')
    setCanvasOpen(!canvasOpen)
  }

  return (
    <Fragment>
      <ul className='navbar-nav d-xl-none '>
        <NavItem className='mobile-menu me-auto d-flex align-items-center'>
          <NavLink
            className='nav-menu-main menu-toggle hidden-xs is-active'
            onClick={() => toggleCanvasStart()}
          >
            <Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
      <NavbarUser skin={skin} setSkin={setSkin} />
      <SidebarComponent
        toggleCanvasStart={toggleCanvasStart}
        canvasPlacement={canvasPlacement}
        canvasOpen={canvasOpen}
      />
    </Fragment>
  )
}

export default ThemeNavbar
