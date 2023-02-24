import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Col, Input, Label, Row } from 'reactstrap'

// ** style
import './custom-cards/common-cards.scss'
const SearchSection = (props) => {
  const { path } = props
  const history = useHistory()
  return (
    // <div className='search-container'>
    //   <div className='flex-col-start'>
    //     <Label className='text_white_1'>What</Label>
    //     <Input style={{ borderRadius: 0 }} />
    //   </div>
    //   <div className='flex-col-start'>
    //     <Label className='text_white_1'>Where</Label>
    //     <Input style={{ borderRadius: 0 }} />
    //     <div className='mt_10 flex-col-end w-100'>
    //       <u className='text_white_4'>
    //         <a>Browse Jobs</a>
    //       </u>
    //     </div>
    //   </div>
    //   <Button.Ripple color='#FF00CD' className='Btn-pink search-container-btn'>
    //     <span className='text_white_5' onClick={() => history.push(path)}>
    //       Search Jobs
    //     </span>
    //   </Button.Ripple>
    <Row className='p-2 round g-1' style={{ background: '#081351' }}>
      <Col sm={12} md={4} lg={4} xxl={5}>
        <div className='flex-col-start'>
          <Label className='text_white_1'>What</Label>
          <Input style={{ borderRadius: 0 }} />
        </div>
      </Col>
      <Col sm={12} md={4} lg={4} xxl={5}>
        <div className='flex-col-start'>
          <Label className='text_white_1'>Where</Label>
          <Input style={{ borderRadius: 0 }} />
          <div className='mt_10 flex-col-end w-100'>
            <u className='text_white_4'>
              <a>Browse Jobs</a>
            </u>
          </div>
        </div>
      </Col>
      <Col sm={12} md={4} lg={4} xxl={2}>
        <div className='mt-2'>
          <Button.Ripple
            block
            color='#081381'
            className='Btn-pink search-container-btn'
          >
            <span className='text_white_5' onClick={() => history.push(path)}>
              Search&nbsp;Jobs
            </span>
          </Button.Ripple>
        </div>
      </Col>
    </Row>
    // </div>
  )
}

export default SearchSection
