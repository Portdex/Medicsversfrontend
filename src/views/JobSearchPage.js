import React, { Fragment } from 'react'
import { Button, Col, Input, Label, Row } from 'reactstrap'
import JobCard from '../@core/ui-components/custom-cards/JobCard'

const JobSearchPage = () => {
  return (
    <Fragment>
      <div className='p_2_4d' style={{ backgroundColor: '#081351' }}>
        <div className='flex-row-between'>
          <div
            className='flex-row-center gap_10'
            style={{ alignItems: 'center' }}
          >
            <Label className='text_white_1'>What</Label>
            <Input style={{ borderRadius: 0, width: 350 }} />
          </div>
          <div
            className='flex-row-center gap_10'
            style={{ alignItems: 'center' }}
          >
            <Label className='text_white_1'>Where</Label>
            <Input style={{ borderRadius: 0, width: 350 }} />
          </div>
          <Button.Ripple
            color='#FF00CD'
            style={{ height: 39, border: 'none' }}
            className='Btn-pink'
            onClick={() => history.push(path ? path : '')}
          >
            <span className='text_white_5'>Search Jobs</span>
          </Button.Ripple>
        </div>
        <div className='flex-row-center mt-2 gap-2'>
          <span className='text_white_1'>Similar Searches:</span>
          <div className='flex-row-between gap-2'>
            <a>
              <span className='text_white_5'>Customer Service Jobs</span>
            </a>
            <a>
              <span className='text_white_5'>Work Form Home Jobs</span>
            </a>
            <a>
              <span className='text_white_5'>Office Administrative Jobs</span>
            </a>
          </div>
        </div>
      </div>
      <div className='mt-5 px-5'>
        <div className='flex-col-start'>
          <span className='text_primary_1'>35,594 Administrator Jobs</span>
          <span className='text_primary_6'>
            Applied filters <u>clear all</u>
          </span>
        </div>
        <Row>
          <Col></Col>
          <Col md={8}>
            <Button
              outline
              color='primary'
              className='mb-2'
              style={{
                borderRadius: 4,
                borderWidth: 2,
                paddingTop: 19,
                paddingBottom: 18
              }}
            >
              <span className='text_primary_3'>Get Job Alerts</span>
            </Button>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default JobSearchPage
