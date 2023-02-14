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
    price,
    color,
    location,
    type
  } = props

  return (
    <Card className='ecommerce-card m-0 Second-commonCard-main' style={{backgroundColor: color ? color : 'transparent'}}>
      <CardBody className='p-0 secondCardBody'>
        <span className='text_pink_1'>{text}</span>
        <span className='text_black_4'>{subText}</span>
        <span className='mt-1 text_black_5'>{price}</span>
        <div className='graySection mt-1'>
            <div className='d-flex align-items-center gap-1'>
                <img src={BookIcon} width={15} height={15}/>
                <span className='text_black_1'>{type}</span>
            </div>
            <div className='d-flex align-items-center gap-1 mt-1'>
                <img src={ClockIcon} width={15} height={15}/>
                <span className='text_black_1'>{location}</span>
            </div>
        </div>
        <u><a className='text_pink_2' href=''>Read More</a></u>
      </CardBody>
    </Card>
  )
}

export default CommonCardSecond
