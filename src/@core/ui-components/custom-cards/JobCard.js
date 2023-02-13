import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { BlackCrossImg, BlackDropDownIcon, BlackHeartImg, BlackMarkerImg, DropDownIcon, JobCardImg } from '../../../assets/images/card-imgs'
// ** style
import './common-cards.scss'

const JobCard = () => {
  return (
    <Card className='Job-card' style={{borderLeftColor: '#FF00CD', borderLeftWidth: 4}}>
        <CardBody className='p-0'>
            <div className='flex-row-between'>
                <span className='text_primary_6'>Promoted</span>
                <div className='flex-row-start gap_10'>
                    <img src={BlackHeartImg} width={25} height={20}/>
                    <img src={BlackCrossImg} width={25} height={22}/>
                </div>
            </div>
            <Row className='flex-row-between'>
                <Col md={9}>
                    <div className='flex-col-start'>
                    <span className='text_skyblue_1'>Security Officer</span>
                    <span className='text_primary_7'>20 December 2022 by <u>WTW</u></span>
                    </div>
                    <Row className='mt-2 g-1'>
                        <Col md={6}>
                            <div className='flex-row-start gap_7' style={{alignItems: 'center'}}>
                            <img src={BlackMarkerImg} width={15}/>
                            <span>Competitive salary</span>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className='flex-row-start gap_7' style={{alignItems: 'center'}}>
                            <img src={BlackMarkerImg} width={15}/>
                            <span>Permanent, full-time</span>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className='flex-row-start gap_7' style={{alignItems: 'center'}}>
                            <img src={BlackMarkerImg} width={15}/>
                            <span>Location</span>
                            </div>
                        </Col>
                    </Row>
                    <div className='flex-row-start mt_10 gap_5' style={{alignItems: 'center'}}>
                    <img src={BlackDropDownIcon} width={15} height={9}/>
                    <span className='text_primary_6'>See more</span>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='flex-col-center'>
                        <img src={JobCardImg} width={169}/>
                    </div>
                </Col>
            </Row>
        </CardBody>
    </Card>
  )
}

export default JobCard
