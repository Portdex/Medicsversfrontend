import React from 'react'
import { Card, CardBody, CardHeader, CardImg } from 'reactstrap'

// ** style
import './common-cards.scss'

const CommonCardThird = (props) => {
    const {
        text,
        cardImg,
        cardImgWidth,
        color
      } = props
  return (
    <Card className='ecommerce-card m-0 third-commonCard-main' style={{backgroundColor: color ? color : 'transparent', height: 350}}>
      <CardHeader className='p-0'>
      <CardImg
            top
            src={cardImg ? cardImg : null}
            alt='Card cap'
            className='first-commonCard-img'
            style={{ width: cardImgWidth ? cardImgWidth : '', height: 163, objectFit: 'cover', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          />
      </CardHeader>
      <CardBody className='p-0 secondCardBody'>
        <span className='text_black_3 mt_10'>{text}</span>
        <div className='flex-row-end h-100'>
        <a className='text_pink_2' href=''>Read More</a>
        </div>
      </CardBody>
    </Card>
  )
}

export default CommonCardThird
