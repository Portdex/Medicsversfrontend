import React from 'react'
import { Card, CardBody, Input, Label } from 'reactstrap'
import Select from 'react-select'
import PerfectScrollbar from 'react-perfect-scrollbar'
// ** style
import './common-cards.scss'
const Sidebar = () => {
  return (
    <Card className='ecommerce-card m-0 Sidebar-component'>
      <CardBody className='p-0 secondCardBody'>
        <div className='Sidebar-component-padding'>
            <p className='text_primary_1'>Filter your search</p>
            <p className='text_primary_8'>Salary range</p>
            <div>
                <Label className='text_primary_7'>
                    From
                </Label>
                <Input placeholder='$ From'/>
            </div>
            <div className='mt_14'>
                <Label className='text_primary_7'>
                    To
                </Label>
                <Input placeholder='$ To'/>
            </div>
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
            <p className='text_primary_1'>Job type</p>
            <div className='flex-row-start gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Permanent &nbsp;</span>
                    <span className='text_skyblue_2'>(27,801)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Temporary &nbsp;</span>
                    <span className='text_skyblue_2'>(2,401)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Contract &nbsp;</span>
                    <span className='text_skyblue_2'>(2,691)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Full-time &nbsp;</span>
                    <span className='text_skyblue_2'>(34,064)</span>
                </div>
            </div>
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -29}}>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Work from home &nbsp;</span>
                    <span className='text_skyblue_2'>(2,004)</span>
                </div>
            </div>
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <p className='text_primary_1'>Dont show</p>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <p className='text_primary_1'>Data posted</p>
           <Select />
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <p className='text_primary_1'>Specialisms</p>
        <div>
            <PerfectScrollbar style={{heigh: 50}}>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
            </PerfectScrollbar>
            </div>
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <p className='text_primary_1'>Posted by</p>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
        </div>
        <hr className='mt-0 w-100' style={{overflow: 'hidden', color: '#D9D9D9'}}/>
        <div className='Sidebar-component-padding' style={{marginTop: -14}}>
        <p className='text_primary_1'>More options</p>
            <div className='flex-row-start mt_10 gap-2'>
                <Input type='checkbox' style={{borderColor: 'black'}}/>
                <div className='flex-row-center'>
                    <span className='text_black_2'>Training Courses &nbsp;</span>
                    <span className='text_skyblue_2'>(384)</span>
                </div>
            </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default Sidebar
