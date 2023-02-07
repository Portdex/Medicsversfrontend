// ** React Imports
import React from 'react'
// ** Reactstrap Imports
import { Button, Card, CardBody, CardHeader, CardImg } from 'reactstrap'
import { BookIcon, ClockIcon } from '../../../assets/images/card-imgs'

// ** style
import './common-cards.scss'

const CommonCardSecond = (props) => {
  const {
    text,
    subText,
    price
  } = props

  return (
    <Card className='ecommerce-card m-0 Second-commonCard-main'>
      <CardBody className='p-0 secondCardBody'>
        <span style={{color: '#FF00CD', whiteSpace: 'nowrap', fontSize: 24, fontWeight: 'bold'}}>{text}</span>
        <span style={{color: '#000000', whiteSpace: 'nowrap', fontSize: 16}}>{subText}</span>
        <span className='mt-1' style={{color: '#000000', whiteSpace: 'nowrap', fontSize: 21, fontWeight: 'bold'}}>{price}</span>
        <div className='graySection mt-1'>
            <div className='d-flex align-items-center gap-1'>
                <img src={BookIcon} width={15} height={15}/>
                <span>Online</span>
            </div>
            <div className='d-flex align-items-center gap-1 mt-1'>
                <img src={ClockIcon} width={15} height={15}/>
                <span>14 weeks, Self paced</span>
            </div>
        </div>
        <u><a style={{color: '#FF00CD', whiteSpace: 'nowrap', fontSize: 18}} href=''>Read More</a></u>
      </CardBody>
    </Card>
  )
}

export default CommonCardSecond
