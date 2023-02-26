import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import ForumCard from '../../@core/ui-components/custom-cards/ForumCard'
import { AvatarIcon } from '../../assets/images/avatars'

const Forums = () => {
  return (
    <Fragment>
        {/* Header sec */}
        <div className='flex-row-between mt-1'>
            <span>Tattle Life</span>
            <Button color='primary'>New posts</Button>
        </div>
        <Row className='mt-1 g-1'>
            <Col md={9}>
                {/* About Sec */}
                <Card className='shadow-none' style={{border: '1px solid #ececec', borderRadius: 4, padding: 0}}>
                    <CardHeader style={{padding: 10}}>
                        <Link>About Tattle Life</Link>
                    </CardHeader>
                    <CardBody style={{padding: '0px 10px'}}>
                        <p>Tattle Life is a commentary website on public business social media accounts. We allow commentary and critiques of people that choose to monetise their personal life as a business and release it into the public domain.</p>
                        <p>We have a zero-tolerance policy to any content that is abusive, hateful or harmful and a team of moderators online 24/7 to remove any content that breaks our strict rules, often in minutes. <a>Continued</a></p>
                    </CardBody>
                </Card>
                {/* Cards */}
                <ForumCard />
            </Col>
            <Col md={3}>
                {/* Most liked sec (side) */}
                <Card className='shadow-none' style={{border: '1px solid #ececec', borderRadius: 4, padding: 0}}>
                    <CardHeader style={{padding: 10}}>
                        <Link>Most Liked 24 Hours</Link>
                    </CardHeader>
                    <CardBody style={{padding: '0px 10px'}}>
                      <div className='flex-row-start gap_10'>
                        <img src={AvatarIcon} width={24} height={24} style={{borderRadius: '50%'}} />
                        <div className='flex-col-start'>
                            <a>Jack Monroe #480 Jack Monroe: McPoverty and a side of lies</a>
                            <p className='mt_5'>By Serafina Pekkala Yesterday at 10:57 PM Reaction score 101 <a>Bloggers</a></p>
                        </div>
                      </div>
                    </CardBody>
                    <CardBody style={{padding: '0px 10px'}}>
                      <div className='flex-row-start gap_10'>
                        <img src={AvatarIcon} width={24} height={24} style={{borderRadius: '50%'}} />
                        <div className='flex-col-start'>
                            <a>Jack Monroe #480 Jack Monroe: McPoverty and a side of lies</a>
                            <p className='mt_5'>By Serafina Pekkala Yesterday at 10:57 PM Reaction score 101 <a>Bloggers</a></p>
                        </div>
                      </div>
                    </CardBody>
                    <CardBody style={{padding: '0px 10px'}}>
                      <div className='flex-row-start gap_10'>
                        <img src={AvatarIcon} width={24} height={24} style={{borderRadius: '50%'}} />
                        <div className='flex-col-start'>
                            <a>Jack Monroe #480 Jack Monroe: McPoverty and a side of lies</a>
                            <p className='mt_5'>By Serafina Pekkala Yesterday at 10:57 PM Reaction score 101 <a>Bloggers</a></p>
                        </div>
                      </div>
                    </CardBody>
                    <CardBody style={{padding: '0px 10px'}}>
                      <div className='flex-row-start gap_10'>
                        <img src={AvatarIcon} width={24} height={24} style={{borderRadius: '50%'}} />
                        <div className='flex-col-start'>
                            <a>Jack Monroe #480 Jack Monroe: McPoverty and a side of lies</a>
                            <p className='mt_5'>By Serafina Pekkala Yesterday at 10:57 PM Reaction score 101 <a>Bloggers</a></p>
                        </div>
                      </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Fragment>
  )
}

export default Forums
