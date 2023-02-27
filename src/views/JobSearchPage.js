import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Col, Input, Label, Row } from 'reactstrap'
import JobCard from '../@core/ui-components/custom-cards/JobCard'
import axios from 'axios'
import Sidebar from '../@core/ui-components/custom-cards/Sidebar'
import SidebarCourses from '../@core/ui-components/custom-cards/SidebarCourses'

const JobSearchPage = () => {
    const id = useSelector(state => state.category)
    const [data, setData] = useState()
    const getJob = async () => {
        const res = await axios({
          method: 'get',
          url: `http://100.26.167.192:5000/api/v1/jobs/${id?.id}`
      })
        console.log(res.data)
        setData(res.data)
      }
    
      useEffect(() => {
        getJob()
      }, [])
  return (
    <Fragment>
        <div className='p_2_4d' style={{backgroundColor: '#081351'}}>
        <div className='flex-row-between'>
        <div className='flex-row-center gap_10' style={{alignItems: 'center'}}>
        <Label className='text_white_1'>
            What
        </Label>
        <Input style={{borderRadius: 0, width: 350}}/>
        </div>
        <div className='flex-row-center gap_10' style={{alignItems: 'center'}}>
        <Label className='text_white_1'>
            Where
        </Label>
        <Input style={{borderRadius: 0, width: 350}}/>
        </div>
        <Button.Ripple color='#FF00CD' style={{height: 39, border: 'none'}} className='Btn-pink' onClick={() => history.push(path ? path : '')}>
            <span className='text_white_5'>Search Jobs</span>
        </Button.Ripple>
        </div>
        <div className='flex-row-center mt-2 gap-2'>
            <span className='text_white_1'>Similar Searches:</span>
            <div className='flex-row-between gap-2'>
            <a><span className='text_white_5'>Customer Service Jobs</span></a>
            <a><span className='text_white_5'>Work Form Home Jobs</span></a>
            <a><span className='text_white_5'>Office Administrative Jobs</span></a>
            </div>
        </div>
        </div>
        <div className='mt-5 px-5'>
            <div className='flex-col-start'>
            <span className='text_primary_1'>35,594 Administrator Jobs</span>
            <span className='text_primary_6'>Applied filters <u>clear all</u></span>
            </div>
            <Row>
                <Col md={4}>
                <Button outline className='mb-2 mt_20' style={{borderRadius: 4, borderWidth: 2, borderColor: '#ACD8FF', paddingTop: 9, paddingBottom: 8}}>
                    <span className='text_primary_3'>Administrator</span>
                </Button>
                    <Sidebar />
                    <div className='mt-2'>
                    <SidebarCourses />
                    </div>
                </Col>
                <Col md={8}>
                <Button outline color='primary' className='mb-2' style={{borderRadius: 4, borderWidth: 2, paddingTop: 19, paddingBottom: 18}}>
                    <span className='text_primary_3'>Get Job Alerts</span>
                </Button>
                <JobCard title='Security Officer' salary='Competitive salary' type='Permanent, full-time' location='Location' link='/'/>
                    {
                        data?.map((item) => {
                            return (
                                <JobCard title={item?.title} salary={item?.salary} type={item?.job_types} location={item?.location} link={item?.apply_link}/>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    </Fragment>
  )
}

export default JobSearchPage
