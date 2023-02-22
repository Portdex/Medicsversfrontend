import { Fragment, useEffect, useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import PrimaryOutlinebtn from '../@core/ui-components/buttons/PrimaryOutlinebtn'
import CommonCardOne from '../@core/ui-components/custom-cards/CommonCardOne'
import CommonCardSecond from '../@core/ui-components/custom-cards/CommonCardSecond'
import CommonCardThird from '../@core/ui-components/custom-cards/CommonCardThird'
import SearchSection from '../@core/ui-components/SearchSection'
import {
  CoursesImg,
  DropDownIcon,
  FirstCardImg,
  HeartIcon,
  SafestoreImg,
  SearchSectionImg
} from '../assets/images/card-imgs'

import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])
  const [catData, setCatData] = useState()
  const [noOfData, setnoOfData] = useState(3)
  const getJobs = async () => {
    const res = await axios({
      method: 'get',
      url: 'http://100.26.167.192:5000/api/v1/jobs/'
    })
    setData(res.data)
  }

  const getJobCat = async () => {
    const res = await axios({
      method: 'get',
      url: 'http://100.26.167.192:5000/api/v1/jobs/categories/'
    })
    setCatData(res.data)
  }

  useEffect(() => {
    getJobs()
    getJobCat()
  }, [])

  const loadMore = () => {
    setnoOfData(noOfData + noOfData)
  }
  const slice = data.slice(0, noOfData)
  return (
    <Row>
      <Col
        className=''
        style={{
          backgroundColor: '#FF00CD'
        }}
      >
        <Row className='g-1 mt-1'>
          <Col sm={12}>
            <div className='flex-row-center'>
              <div className='flex-col-start'>
                <span className='text_white_2'>Love</span>
                <span className='text_white_2' style={{ marginTop: -30 }}>
                  M<img src={HeartIcon} width={32} height={25} />
                  ndays
                </span>
                <p className='text_white_3 mt-2'>Find a job you’ll love</p>
              </div>
            </div>
          </Col>
          <Col sm={12}>
            <Row className='flex-row-center'>
              <Col sm={12} md={10} lg={8} xxl={10}>
                <SearchSection path='/search' />
              </Col>
            </Row>
          </Col>
          <Col sm={12}>
            <div className='flex-col-center mt_13'>
              <span className='text_white_6'>
                Search 227,388 new jobs - 11,801 added in the last 24 hours
              </span>
            </div>
          </Col>
        </Row>
      </Col>
      <div
        style={{
          backgroundColor: '#D9D9D9',
          paddingTop: 18,
          paddingBottom: 18
        }}
      >
        <div className='d-flex justify-content-center'>
          <span className='text_primary_1'>
            January flash sale: Shop courses from $10
          </span>
        </div>
      </div>
      <div className='mt_33 flex-col-center'>
        <span className='text_primary_2'>Trending Jobs</span>
      </div>
      <div className='flex-row-center gap-1 mt-4 px-5 flex-wrap'>
        {catData?.map((item) => {
          return (
            <PrimaryOutlinebtn
              id={item?.cat_id}
              path='/search'
              key={item?.cat_id}
              text={item?.cat_name}
            />
          )
        })}
      </div>
      <div className='flex-col-center mt-4 mb-2'>
        <div className='flex-row-between' style={{ width: '35%' }}>
          <span className='text_primary_4'>Search by Sector</span>
          <span className='text_primary_4'>Search by Location</span>
        </div>
      </div>
      <Row className='g-1  '>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='flex-xs-col-center'>
          <CommonCardOne text='Security' cardImg={FirstCardImg} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='flex-xs-col-center'>
          <CommonCardOne text='Security Officer' cardImg={FirstCardImg} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='flex-xs-col-center'>
          <CommonCardOne text='Static Security Guard' cardImg={FirstCardImg} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='flex-xs-col-center'>
          <CommonCardOne
            text='Corporate Security Guard'
            cardImg={FirstCardImg}
          />
        </Col>
      </Row>
      <div className='mt_16 flex-col-center mb-4'>
        <div className='flex-row-center gap_5 align-items-center'>
          <u className='text_primary_4'>
            <a>See more sectors</a>
          </u>
          <img src={DropDownIcon} width={15} height={10} />
        </div>
      </div>
      <div className='mt-5 flex-col-center mb-3'>
        <span className='text_primary_2'>Popular Jobs</span>
      </div>
      <Row className='g-2'>
        {slice?.map((item, i) => {
          return (
            <Col key={i} sm={6} md={6} lg={4} xxl={3}>
              <CommonCardSecond
                text={item?.title}
                subText={item?.agency_name}
                price={item?.salary}
                type={item?.job_types}
                location={item?.location}
                path={item?.apply_link}
              />
            </Col>
          )
        })}
        {/* <Col sm={6} md={6} lg={4} xxl={3}>
          <CommonCardSecond
            text='Security Job'
            subText='Vision2Learn'
            price='15k - 25k'
          />
        </Col>
        <Col sm={6} md={6} lg={4} xxl={3}>
          <CommonCardSecond
            text='Security Job'
            subText='Vision2Learn'
            price='15k - 25k'
          />
        </Col>
        <Col sm={6} md={6} lg={4} xxl={3}>
          <CommonCardSecond
            text='Security Job'
            subText='Vision2Learn'
            price='15k - 25k'
          />
        </Col> */}
      </Row>
      <div className='flex-col-center'>
        <Button
          outline
          color='primary'
          className='mt_30 mb-5'
          onClick={() => loadMore()}
          style={{
            borderRadius: 0,
            borderWidth: 2,
            paddingTop: 13,
            paddingBottom: 13
          }}
        >
          <span className='text_primary_3'>View More Courses</span>
        </Button>
      </div>
      <div
        className='p_1_4d flex-row-center gap-3'
        style={{ backgroundColor: '#ECECEC' }}
      >
        <Row className='g-1'>
          <Col>
            <div className='flex-col-start  gap-1'>
              <div className='flex-row-between gap-1'>
                <img src={SafestoreImg} width={190} />
                <img src={SafestoreImg} width={190} />
                <img src={SafestoreImg} width={190} />
              </div>
              <div className='flex-row-between gap-1'>
                <img src={SafestoreImg} width={190} />
                <img src={SafestoreImg} width={190} />
                <img src={SafestoreImg} width={190} />
              </div>
            </div>
          </Col>
          <Col>
            <div className='d-flex flex-column'>
              <span className='text_primary_2'>
                Find a job you'll love with the UK's #1 job site
              </span>
              <p className='text_primary_5 mt_10'>
                Your next role could be with one of these leading companies.
              </p>
              <div>
                <Button
                  outline
                  color='primary'
                  className='mt-2'
                  style={{
                    borderRadius: 0,
                    borderWidth: 2,
                    paddingTop: 12,
                    paddingBottom: 12
                  }}
                >
                  <span className='text_primary_3'>See all companies</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Col className='mt-5 mb-3 '>
        <div className='flex-col-center'>
          <span className='text_primary_2'>Support for you</span>
        </div>
        <Row className='px-3 mt-3'>
          <Col sm={12} md={6}>
            <span className='text_primary_2'>Upskills with courses</span>
            <img src={CoursesImg} width={380} height={250} />
            <div
              style={{
                position: 'relative',
                left: 210,
                top: -100,
                width: '60%'
              }}
            >
              <CommonCardSecond
                color='white'
                text='Security Job'
                subText='Vision2Learn'
                price='Free'
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <span className='text_primary_2'>Career Advice</span>
            <Row className='flex-row-between g-1 mt-1 '>
              <Col sm={12} lg={6}>
                <CommonCardThird
                  cardImg={FirstCardImg}
                  text='Free Cv Templates'
                />
              </Col>
              <Col sm={12} lg={6}>
                <CommonCardThird
                  cardImg={FirstCardImg}
                  text='How to: Manage your mental health whilst jobseeking'
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='px-3 g-1 mt-1 mt-md-0'>
          <Col sm={12} md={6}>
            <div className='flex-col-start'>
              <span className='text_primary_5'>
                Invest in your future with thousands of courses to help you
                learn and develop. Browse courses
              </span>
              <Button
                outline
                color='primary'
                className='mt-2'
                style={{
                  borderRadius: 0,
                  borderWidth: 2,
                  paddingTop: 12,
                  paddingBottom: 12
                }}
              >
                <span className='text_primary_3'>Browse Courses</span>
              </Button>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className='flex-col-start'>
              <span className='text_primary_5'>
                Take your job search to the next level with our expert tips and
                career advice. Browse career advice
              </span>
              <Button
                outline
                color='primary'
                className='mt-2'
                style={{
                  borderRadius: 0,
                  borderWidth: 2,
                  paddingTop: 12,
                  paddingBottom: 12
                }}
              >
                <span className='text_primary_3'>Browse Carrier Advice</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Home
