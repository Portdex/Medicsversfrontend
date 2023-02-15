import React from 'react'
import { Card, CardBody, Input, Label } from 'reactstrap'
import { GreaterThanImg } from '../../../assets/images/card-imgs'
// ** style
import './common-cards.scss'

const SidebarCourses = () => {
  return (
    <Card className='ecommerce-card m-0 Sidebar-component'>
    <CardBody className='p-0'>
      <div className='Sidebar-component-padding'>
          <p className='text_primary_1'>Administrator courses</p>
      </div>
      <hr className='w-100' style={{overflow: 'hidden', color: '#D9D9D9', marginTop: -20}}/>
      <div className='Sidebar-component-padding' style={{marginTop: -14}}>
          <p className='text_primary_5'>Administrator</p>
          <div className='flex-col-start gap_5'>
                  <span className='text_black_2'>Online-self paced</span>
                  <span className='text_black_2'>$12</span>
          </div>
      </div>
      <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
      <div className='Sidebar-component-padding' style={{marginTop: -14}}>
          <p className='text_primary_5'>Administrator</p>
          <div className='flex-col-start gap_5'>
                  <span className='text_black_2'>Online-self paced</span>
                  <span className='text_black_2'>$12</span>
          </div>
      </div>
      <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
      <div className='Sidebar-component-padding' style={{marginTop: -14}}>
          <div className='flex-row-between gap_5'>
                  <span className='text_primary_5'>View admin , secretarial & PA courses</span>
                  <img src={GreaterThanImg} width={10}/>
          </div>
      </div>
    </CardBody>
  </Card>
  )
}

export default SidebarCourses
