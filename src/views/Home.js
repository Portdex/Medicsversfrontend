import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Button } from 'reactstrap'
import PrimaryOutlinebtn from '../@core/ui-components/buttons/PrimaryOutlinebtn'
import CommonCardOne from '../@core/ui-components/custom-cards/CommonCardOne'
import { FirstCardImg } from '../assets/images/card-imgs'

const Home = () => {
  return (
    <div>
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
