// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap'

// ** Third Party Components
import Prism from 'prismjs'

const TwoTabs = () => {
  // ** State
    const [active, setActive] = useState('1')
    const [btnactive, setBtnActive] = useState('1')
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
      setBtnActive(tab)
    }
  }
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <div className='nav-devider'>
        <Nav tabs className='flex-row-between gap-5'>
          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
              <span className={btnactive === '1' ? 'text_pink_1' : 'text_primary_4'}>Search by Sector</span>
            </NavLink>
          </NavItem>
          <NavItem style={{borderBottomColor: '#ff00cd !important'}}>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            >
            
              <span className={btnactive === '2' ? 'text_pink_1' : 'text_primary_4'}>Search by Location</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className='' activeTab={active}>
        </TabContent>
      </div>
    </Fragment>
  )
}
export default TwoTabs
