import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Button } from 'reactstrap'
import PrimaryOutlinebtn from '../@core/ui-components/buttons/PrimaryOutlinebtn'
import CommonCardOne from '../@core/ui-components/custom-cards/CommonCardOne'
import CommonCardSecond from '../@core/ui-components/custom-cards/CommonCardSecond'
import SearchSection from '../@core/ui-components/SearchSection'
import { DropDownIcon, FirstCardImg, HeartIcon } from '../assets/images/card-imgs'

const Home = () => {
  return (
    <div>
      <div style={{backgroundColor: '#FF00CD', paddingTop: 73, paddingBottom: 43, paddingLeft: 255, paddingRight: 255}}>
        <div className='flex-col-start'>
        <span className='text_white_2'>Love</span>
        <span className='text_white_2' style={{marginTop: -30}}>M<img src={HeartIcon} width={32} height={25}/>ndays</span>
        </div>
        <p className='text_white_3 mt-2'>Find a job you’ll love</p>
        <div className='mt-3'>
          <SearchSection />
        </div>
        <div className='flex-col-center mt_13'>
            <span className='text_white_6'>Search 227,388 new jobs - 11,801 added in the last 24 hours</span>
        </div>
      </div>
      <div style={{backgroundColor: '#D9D9D9', paddingTop: 18, paddingBottom: 18}}>
        <div className='d-flex justify-content-center'>
        <span className='text_primary_1'>
        January flash sale: Shop courses from $10
        </span>
        </div>
      </div>
      <div className='mt_33 flex-col-center'>
        <span className='text_primary_2'>Trending Jobs</span>
      </div>
      <div className='flex-row-between mt-4 px-5'>
      <PrimaryOutlinebtn text='Work from home jobs'/>
      <PrimaryOutlinebtn text='Immediate start jobs'/>
      <PrimaryOutlinebtn text='Manager jobs'/>
      <PrimaryOutlinebtn text='Finance jobs'/>
      <PrimaryOutlinebtn text='Warehouse jobs'/>
      <PrimaryOutlinebtn text='Accountant jobs'/>
      </div>
      <div className='flex-row-between mt_13 px-5'>
      <PrimaryOutlinebtn text='Work from home jobs'/>
      <PrimaryOutlinebtn text='Immediate start jobs'/>
      <PrimaryOutlinebtn text='Manager jobs'/>
      <PrimaryOutlinebtn text='Finance jobs'/>
      <PrimaryOutlinebtn text='Warehouse jobs'/>
      <PrimaryOutlinebtn text='Accountant jobs'/>
      </div>
      <div className='flex-col-center mt-4 mb-2'>
        <div className='flex-row-between' style={{width: '35%'}}>
          <span className='text_primary_4'>Search by Sector</span>
          <span className='text_primary_4'>Search by Location</span>
        </div>
      </div>
      <Row>
        <Col md={3}>
      <CommonCardOne text='Security' cardImg={FirstCardImg} />
        </Col>
        <Col md={3}>
        <CommonCardOne text='Security Officer' cardImg={FirstCardImg} />
        </Col>
        <Col md={3}>
      <CommonCardOne text='Static Security Guard' cardImg={FirstCardImg} />
        </Col>
        <Col md={3}>
      <CommonCardOne text='Corporate Security Guard' cardImg={FirstCardImg} />
        </Col>
      </Row>
      <div className='mt_16 flex-col-center mb-4'>
        <div className='flex-row-center gap_5'>
        <u className='text_primary_4'><a>See more sectors</a></u>
        <img src={DropDownIcon} width={15} height={10}/>
        </div>
      </div>
      <div className='mt-5 flex-col-center mb-3'>
        <span className='text_primary_2'>Popular Jobs</span>
      </div>
      <Row>
        <Col md={3}>
        <CommonCardSecond text='Security Job' subText='Vision2Learn' price='15k - 25k'/>
        </Col>
        <Col md={3}>
        <CommonCardSecond text='Security Job' subText='Vision2Learn' price='15k - 25k'/>
        </Col>
        <Col md={3}>
        <CommonCardSecond text='Security Job' subText='Vision2Learn' price='15k - 25k'/>
        </Col>
        <Col md={3}>
        <CommonCardSecond text='Security Job' subText='Vision2Learn' price='15k - 25k'/>
        </Col>
      </Row>
      <div className='flex-col-center'>
      <Button outline color='primary' className='mt_30 mb-5' style={{borderRadius: 0, borderWidth: 2, paddingTop: 13, paddingBottom: 13}}>
          <span className='text_primary_3'>View More Courses</span>
      </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Kick start your project 🚀</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>All the best for your new project.</CardText>
          <CardText>
            Please make sure to read our{' '}
            <CardLink
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/'
              target='_blank'
            >
              Template Documentation
            </CardLink>{' '}
            to understand where to go from here and how to use our template.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Want to integrate JWT? 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.
          </CardText>
          <CardText>
            Please read our{' '}
            <CardLink
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/auth'
              target='_blank'
            >
              JWT Documentation
            </CardLink>{' '}
            to get more out of JWT authentication.
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
