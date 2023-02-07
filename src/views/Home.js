import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Button } from 'reactstrap'
import PrimaryOutlinebtn from '../@core/ui-components/buttons/PrimaryOutlinebtn'
import CommonCardOne from '../@core/ui-components/custom-cards/CommonCardOne'
import CommonCardSecond from '../@core/ui-components/custom-cards/CommonCardSecond'
import { FirstCardImg, HeartIcon } from '../assets/images/card-imgs'

const Home = () => {
  return (
    <div>
      <div style={{backgroundColor: '#FF00CD', height: 606, paddingTop: 73, paddingBottom: 43, paddingLeft: 255, paddingRight: 255}}>
        <h1>Love</h1>
        <h1>M<img src={HeartIcon} width={32} height={25}/>ndays</h1>
        <p>Find a job you’ll love</p>
      </div>
      <div style={{backgroundColor: '#D9D9D9', paddingTop: 18, paddingBottom: 18}}>
        <div className='d-flex justify-content-center'>
        <span>
        January flash sale: Shop courses from $10
        </span>
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
      <Row className='g-1 my-5'>
        <Col>
        <PrimaryOutlinebtn text='Work from home jobs'/>
        </Col>
        <Col>
        <PrimaryOutlinebtn text='Immediate start jobs'/>
        </Col>
        <Col>
        <PrimaryOutlinebtn text='Manager jobs'/>
        </Col>
        <Col>
        <PrimaryOutlinebtn text='Finance jobs'/>
        </Col>
        <Col>
        <PrimaryOutlinebtn text='Warehouse jobs'/>
        </Col>
      </Row>

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
