import { useState } from 'react'
// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import * as Icon from 'react-feather'

// ** Reactstrap Imports
import { NavItem, NavLink } from 'reactstrap'
// ** Custom Components
import Autocomplete from '@components/autocomplete'
import { IconSearchblack } from '../../../../assets/images/social-icons'

const NavbarSearch = () => {
  // ** States
  const [suggestions, setSuggestions] = useState([])
  const [navbarSearch, setNavbarSearch] = useState(false)

  // ** Function to handle external Input click
  const handleExternalClick = () => {
    if (navbarSearch === true) {
      setNavbarSearch(false)
    }
  }
  // ** Function to handle search suggestion Click
  const handleSuggestionItemClick = () => {
    setNavbarSearch(false)
  }
  // ** Function to close search on ESC & ENTER Click
  const onKeyDown = (e) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setTimeout(() => {
        setNavbarSearch(false)
      }, 1)
    }
  }
  // ** Function to clear input value
  const handleClearInput = (setUserInput) => {
    if (!navbarSearch) {
      setUserInput('')
    }
  }

  return (
    <NavItem
      className='nav-search d-block d-lg-none '
      onClick={() => setNavbarSearch(true)}
    >
      <NavLink className='nav-link-search'>
        <IconSearchblack className='ficon' />
      </NavLink>
      <div
        className={classnames('search-input', {
          open: navbarSearch === true
        })}
      >
        <div className='search-input-icon'>
          <Icon.Search />
        </div>
        {navbarSearch ? (
          <Autocomplete
            className='form-control'
            suggestions={suggestions}
            filterKey='title'
            filterHeaderKey='groupTitle'
            grouped={true}
            placeholder='Explore ...'
            autoFocus={true}
            onSuggestionItemClick={handleSuggestionItemClick}
            externalClick={handleExternalClick}
            clearInput={(userInput, setUserInput) =>
              handleClearInput(setUserInput)
            }
            // onKeyDown={onKeyDown}
            onChange={(e) => dispatch(handleSearchQuery(e.target.value))}
            customRender={(
              item,
              i,
              filteredData,
              activeSuggestion,
              onSuggestionItemClick,
              onSuggestionItemHover
            ) => {
              const IconTag = Icon[item.icon ? item.icon : 'X']
              return (
                <li
                  className={classnames('suggestion-item', {
                    active: filteredData.indexOf(item) === activeSuggestion
                  })}
                  key={i}
                  onClick={(e) =>
                    handleListItemClick(onSuggestionItemClick, item.link, e)
                  }
                  onMouseEnter={() =>
                    onSuggestionItemHover(filteredData.indexOf(item))
                  }
                >
                  <div
                    className={classnames({
                      'd-flex justify-content-between align-items-center': ''
                      // :item.file || item.img
                    })}
                  >
                    <div className='item-container d-flex'>
                      {/* {item.icon ? ( */}
                      <IconTag size={17} />
                      {/* ) : item.file ? ( */}
                      <img
                        src={item.file}
                        height='36'
                        width='28'
                        alt={item.title}
                      />
                      {/* ) : item.img ? ( */}
                      <img
                        className='rounded-circle mt-25'
                        src={item.img}
                        height='28'
                        width='28'
                        alt={item.title}
                      />
                      {/* ) : null} */}
                      <div className='item-info ms-1'>
                        <p className='align-middle mb-0'>{item.title}</p>
                        {/* {item.by || item.email ? ( */}
                        <small className='text-muted'>
                          {/* {item.by ? item.by : item.email ? item.email : null} */}
                        </small>
                        {/* ) : null} */}
                      </div>
                    </div>
                    {/* {item.size || item.date ? ( */}
                    <div className='meta-container'>
                      <small className='text-muted'>
                        {/* {item.size ? item.size : item.date ? item.date : null} */}
                      </small>
                    </div>
                    {/* ) : null} */}
                  </div>
                </li>
              )
            }}
          />
        ) : null}
        <div className='search-input-close'>
          <Icon.X
            className='ficon'
            onClick={(e) => {
              e.stopPropagation()
              setNavbarSearch(false)
            }}
          />
        </div>
      </div>
    </NavItem>
  )
}

export default NavbarSearch
