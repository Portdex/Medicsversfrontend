// ** React Imports
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
// import { isUserLoggedIn } from '@utils'

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power
} from 'react-feather'

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import { IconDownArrow } from '../../../../assets/images/icons'
import { GrayProfileOutline } from '../../../../assets/images/card-img'
import { ProfilePic2 } from '../../../../assets/images/profilePhoto'
import { IconLogoutOutline, IconMessageChat, IconWishlist, IconWishlistOutline } from '../../../../assets/images/social-icons'

// ** Styles

// import '../../../../@core/scss/base/pages/auth/login-header.scss'

const UserDropdown = () => {
  // ** State
  const [userData] = useState(null)

  //** ComponentDidMount
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar

  return (
    <UncontrolledDropdown
      tag='li'
      className='dropdown-user nav-item   d-block d-lg-none'
    >
      <DropdownToggle
        href='/'
        tag='a'
        className='nav-link dropdown-user-link'
        onClick={(e) => e.preventDefault()}
      >
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
        {/* <div className='user-nav d-sm-flex d-none'>
          <span className='user-name  login_field_label ms-1'>
            {(userData && userData['username']) || 'Javier Doe'}{' '}
            <IconDownArrow className='ms-1' />
          </span>
          <span className='user-status'>
            {(userData && userData.role) || 'Admin'}
          </span>
        </div> */}
      </DropdownToggle>
      <DropdownMenu end>
        {/* <DropdownItem
          tag='a'
          href='/apps/email'
          onClick={(e) => e.preventDefault()}
        >
          <Mail size={14} className='me-75' />
          <span className='align-middle'>Inbox</span>
        </DropdownItem>
        <DropdownItem
          tag='a'
          href='/apps/todo'
          onClick={(e) => e.preventDefault()}
        >
          <CheckSquare size={14} className='me-75' />
          <span className='align-middle'>Tasks</span>
        </DropdownItem>
        <DropdownItem
          tag='a'
          href='/apps/chat'
          onClick={(e) => e.preventDefault()}
        >
          <MessageSquare size={14} className='me-75' />
          <span className='align-middle'>Chats</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          tag='a'
          href='/pages/account-settings'
          onClick={(e) => e.preventDefault()}
        >
          <Settings size={14} className='me-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
        <DropdownItem
          tag='a'
          href='/pages/pricing'
          onClick={(e) => e.preventDefault()}
        >
          <CreditCard size={14} className='me-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem>
        <DropdownItem
          tag='a'
          href='/pages/faq'
          onClick={(e) => e.preventDefault()}
        >
          <HelpCircle size={14} className='me-75' />
          <span className='align-middle'>FAQ</span>
        </DropdownItem>*/}
        <DropdownItem
          // tag={Link}
          // to='/customer/settings/my-profile'
          // onClick={(e) => e.preventDefault()}
          className='w-100'
        >
          <img src={ProfilePic2} height={48}/>
          <span className='align-middle text_GunPowder_1' style={{marginLeft: 10}}>Jin</span>
        </DropdownItem>
        <DropdownItem
          tag={Link}
          to='/customer/settings/my-profile'
          // onClick={(e) => e.preventDefault()}
        >
          <Settings size={14} className='me-75' />
          <span className='align-middle text4_DarkGray200_14'>Account Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/customer/settings/wishlist-setting'>
          <IconWishlistOutline size={14} className='me-75'/>
          <span className='align-middle text4_DarkGray200_14'>Wishlist</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/login'>
          <IconMessageChat size={14} className='me-75' />
          <span className='align-middle text4_DarkGray200_14'>Chat history</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/login'>
          <IconLogoutOutline size={14} className='me-75' />
          <span className='align-middle text4_DarkGray200_14'>Log out</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
