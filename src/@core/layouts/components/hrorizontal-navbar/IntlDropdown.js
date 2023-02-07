// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell, X, Check, AlertTriangle } from 'react-feather'
import {
  IconGlobe,
  En,
  IconDownArrow,
  IconCrossGray,
  IconChecked
} from '../../../../assets/images/icons'
// ** Reactstrap Imports
import {
  Button,
  Badge,
  Input,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

import { IconNotify } from '../../../../assets/images/card-img'

const IntlDropdown = () => {
  // ** Notification Array
  const notificationsArray = [
    {
      img: IconNotify,
      subtitle: 'Won the monthly best seller badge.',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>Congratulation Sam 🎉</span>winner!
        </p>
      )
    },
    {
      img: IconNotify,
      subtitle: 'You have 10 unread messages.',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>New message</span>&nbsp;received
        </p>
      )
    },
    {
      img: IconNotify,
      avatarContent: 'MD',
      color: 'light-danger',
      subtitle: 'MD Inc. order updated',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>Revised Order 👋</span>&nbsp;checkout
        </p>
      )
    },
    {
      img: IconNotify,
      avatarIcon: <Check size={14} />,
      color: 'light-success',
      subtitle: 'Last month sales report generated',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>Sales report</span>&nbsp;generated
        </p>
      )
    },
    {
      img: IconNotify,
      avatarIcon: <AlertTriangle size={14} />,
      color: 'light-warning',
      subtitle: 'BLR Server using high memory',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>High memory</span>&nbsp;usage
        </p>
      )
    }
  ]

  // ** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
            <a
              key={index}
              className='d-flex'
              href='/'
              onClick={(e) => e.preventDefault()}
            >
              <div
                className={classnames('list-item d-flex border-0', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <div className='me-1'>
                      <Avatar
                        {...(item.img
                          ? { img: item.img, imgHeight: 32, imgWidth: 32 }
                          : item.avatarContent
                          ? {
                              content: item.avatarContent,
                              color: item.color
                            }
                          : item.avatarIcon
                          ? {
                              icon: item.avatarIcon,
                              color: item.color
                            }
                          : null)}
                      />
                    </div>
                    <div className='list-item-body flex-grow-1'>
                      {item.title}
                      <small className='notification-text'>
                        {item.subtitle}
                      </small>
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.title}
                    {item.switch}
                  </Fragment>
                )}
              </div>
            </a>
          )
        })}
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */
  return (
    <UncontrolledDropdown
      href='/'
      tag='li'
      className='dropdown-language nav-item   d-md-block d-none language-selector'
      style={{ top: 1 }}
    >
      <DropdownToggle
        tag='a'
        className='nav-link'
        href='/'
        onClick={(e) => e.preventDefault()}
      >
        <div className='flex-row-center gap_6'>
          <IconGlobe height={15} width={15} />
          <div className='flex-row-center gap_10'>
            <img src={En} alt='en' height={12} />
            <IconDownArrow />
          </div>
        </div>
      </DropdownToggle>

      <DropdownMenu
        end
        tag='ul'
        className='dropdown-menu-media  round p-2 custom-language-drop'
        style={{ width: 200, top: 10 }}
      >
        {/* <li className='dropdown-menu-header border-0'>
        <DropdownItem className='d-flex' tag='div' header>
          <h4 className='notification-title mb-0 me-auto'>Notifications</h4>
          <Badge tag='div' color='light-primary' pill>
            6 New
          </Badge>
        </DropdownItem>
      </li> */}
        <div className='d-flex flex-column '>
          <div className='d-flex flex-row-reverse'>
            <IconCrossGray />
          </div>
          <div className='flex-col-start gap-1'>
            <span className='text4_DarkGray700_15'> Korea (kr)</span>
            <div className='flex-row-between w-100'>
              <span className='text4_DarkGray700_15'> English (us)</span>
              <IconChecked />
            </div>
          </div>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default IntlDropdown
