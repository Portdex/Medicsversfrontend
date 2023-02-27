import React, { Fragment } from 'react'
import { Button, Col, Input, Label, Row } from 'reactstrap'
import AgencyCard from '../../@core/ui-components/custom-cards/AgencyCard'
import SidebarAgency from '../../@core/ui-components/custom-cards/SidebarAgency'

const Agrencies = () => {
  return (
    <Fragment>
        <div className='p_2_4d' style={{backgroundColor: '#081351'}}>
        <div className='flex-row-between flex-xs-col-center'>
        <div className='flex-row-center flex-xs-col-start gap_10' style={{alignItems: 'center'}}>
        <Label className='text_white_1'>
            What
        </Label>
        <Input style={{borderRadius: 0, width: 350}}/>
        </div>
        <div className='flex-row-center flex-xs-col-start mt-xs-20 gap_10' style={{alignItems: 'center'}}>
        <Label className='text_white_1'>
            Where
        </Label>
        <Input style={{borderRadius: 0, width: 350}}/>
        </div>
        <Button.Ripple color='#FF00CD' style={{height: 39, border: 'none'}} className='Btn-pink mt-xs-20' onClick={() => history.push(path ? path : '')}>
            <span className='text_white_5' style={{whiteSpace: 'nowrap'}}>Search Jobs</span>
        </Button.Ripple>
        </div>
        </div>
        <div className='mt-5 px-5 mb-4'>
            <div className='flex-col-start'>
            <span className='text_primary_1'>35,594 Administrator Jobs</span>
            <span className='text_primary_6'>Applied filters <u>clear all</u></span>
            </div>
            <Row>
                <Col md={4}>
                <Button outline className='mb-2 mt_20' style={{borderRadius: 4, borderWidth: 2, borderColor: '#ACD8FF', paddingTop: 9, paddingBottom: 8}}>
                    <span className='text_primary_3'>Administrator</span>
                </Button>
                    <SidebarAgency />
                </Col>
                <Col md={8}>
                <Button outline color='primary' className='mb-2 mt-xs-10' style={{borderRadius: 4, borderWidth: 2, paddingTop: 19, paddingBottom: 18}}>
                    <span className='text_primary_3'>Get Job Alerts</span>
                </Button>
                <AgencyCard />
                {/* <JobCard title='Security Officer' salary='Competitive salary' type='Permanent, full-time' location='Location' link='/'/>
                    {
                        data?.map((item) => {
                            return (
                                <JobCard title={item?.title} salary={item?.salary} type={item?.job_types} location={item?.location} link={item?.apply_link}/>
                            )
                        })
                    } */}
                </Col>
            </Row>
        </div>
    </Fragment>
  )
}

export default Agrencies
