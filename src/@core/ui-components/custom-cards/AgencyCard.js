import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { BlackCrossImg, BlackDropDownIcon, BlackHeartImg, BlackMarkerImg, DropDownIcon, JobCardImg } from '../../../assets/images/card-imgs'
// ** style
import './common-cards.scss'

const AgencyCard = () => {
  return (
    <Card className='agency-card'>
        <CardBody className='p-0'>
            <div className='flex-row-between'>
                <a><span className='text_primary_1'>Ivy Resource Group-Construction Recruitment</span></a>
                <div className='flex-row-start gap_10'>
                    <img src={BlackHeartImg} width={25} height={20}/>
                    <img src={BlackCrossImg} width={25} height={22}/>
                </div>
            </div>
            <Row className='flex-row-between'>
                <Col md={12}>
                    <div className='flex-col-start'>
                    <span className='text_primary_7'>International Career Institute</span>
                    <span className='text_primary_7'>Tutorial Support - Interest Free Payment Plans - Course Developed in Consultation with Industry</span>
                    </div>
                    <Row className='mt-2 g-1'>
                        <Col md={6}>
                            <div className='flex-row-start gap_7' style={{alignItems: 'center'}}>
                            <img src={BlackMarkerImg} width={15}/>
                            <span className='text_primary_7'> 15k - 100k+</span>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className='flex-row-start gap_7' style={{alignItems: 'center'}}>
                            <img src={BlackMarkerImg} width={15}/>
                            <span className='text_primary_7'>Part Time, Permanent, Temporary</span>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className='flex-row-start gap_7' style={{alignItems: 'center'}}>
                            <img src={BlackMarkerImg} width={15}/>
                            <span className='text_primary_7'>East Anglia, and London</span>
                            </div>
                        </Col>
                    </Row>
                    <div className='mt-1'>
                        <div className='flex-row-start gap_10' style={{alignItems: 'center'}}>
                        <img src={BlackDropDownIcon} width={15} height={9}/>
                        <a><span className='text_primary_8'>About us</span></a>
                        </div>
                        <p>Ivy Resource Group is an established recruitment consultancy agency with years of experience in supplying skilled, unskilled and professional personnel for temporary and permanent roles in the construction industry. How can we add value to your business? Competitive rates - Talented and reliable candidates - 24/7 support - Sector specific & experienced Consultants & Managers</p>
                    </div>
                    <div className='flex-row-start flex-xs-col-center gap_20'>
                    <Button outline color="info" style={{borderRadius: 25, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5}}>GREAT SERVICE</Button>
                    <Button outline color="danger" style={{borderRadius: 25, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5}}>HIGHLY RATED</Button>
                    <Button outline color="success" style={{borderRadius: 25, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5}}>TRENDING</Button>
                    </div>
                </Col>
            </Row>
        </CardBody>
    </Card>
  )
}

export default AgencyCard
