// ** React Imports
import React from 'react'
// ** Reactstrap Imports
import { Button, Card, CardBody, CardHeader, CardImg } from 'reactstrap'

// ** style
import './common-cards.scss'

const CommonCardOne = (props) => {
  const {
    cardImg,
    cardImgWidth,
    text
  } = props

  return (
    <Card className='ecommerce-card m-0 first-commonCard-main'>
      <CardHeader
        className='p-0'
      >
        <div className='rating_star'>
          <CardImg
            top
            src={cardImg ? cardImg : null}
            alt='Card cap'
            className='first-commonCard-img'
            style={{ width: cardImgWidth ? cardImgWidth : '', objectFit: 'cover', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          />
        </div>
      </CardHeader>
      <CardBody className='p-0'>
        <span style={{color: '#081351', whiteSpace: 'nowrap', fontSize: 20, fontWeight: 'bold'}}>{text}</span>
      </CardBody>
    </Card>
  )
}

export default CommonCardOne
