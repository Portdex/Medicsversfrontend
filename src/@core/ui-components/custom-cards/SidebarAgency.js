import React from 'react'
import { Card, CardBody, Input, Label } from 'reactstrap'
import Select from 'react-select'
import PerfectScrollbar from 'react-perfect-scrollbar'
// ** style
import './common-cards.scss'

const SidebarAgency = () => {
  return (
    <Card className='ecommerce-card m-0 Sidebar-component'>
      <CardBody className='p-0 secondCardBody'>
        <div className='Sidebar-component-padding'>
            <p className='text_primary_1'>Find the best by</p>
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <Label className='text_black_1'>Industry (required)</Label>
           <Select />
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <Label className='text_black_1'>Industry Sub Sector</Label>
           <Select />
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <Label className='text_black_1'>I'd like a recruitment agency to... (required)</Label>
           <Select />
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <Label className='text_black_1'>Location</Label>
           <Select />
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <Label className='text_black_1'>Employment Type</Label>
           <Select />
        </div>
      </CardBody>
    </Card>
  )
}

export default SidebarAgency
