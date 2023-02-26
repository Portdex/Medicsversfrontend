import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { AvatarIcon } from '../../../assets/images/avatars'
import { ChatIcon } from '../../../assets/images/card-imgs'
// ** style
import './common-cards.scss'

const ForumCardRow = (props) => {
    const { cat, thread, message, views, avatar, text1, time, name } = props
    const [text, setText] = useState()
    useEffect(() => {
    setText(`${text1.substring(0, 30)} ...`)
    }, [text1])
  return (
    <Row className='forum-row'>
        <Col md={5}>
            <div className='flex-row-start gap_10' style={{alignItems: 'center'}}>
                <img src={ChatIcon} width={36} height={36} />
                <span><a>{cat}</a></span>
            </div>
        </Col>
        <Col md={1} className='flex-col-center'>
            <span>Threads</span>
            <span>{thread}</span>
        </Col>
        <Col md={1} className='flex-col-center'>
            <span>Messages</span>
            <span>{message}</span>
        </Col>
        <Col md={1} className='flex-col-center'>
            <span>Views</span>
            <span>{views}</span>
        </Col>
        <Col md={4}>
        <div className='flex-row-start gap_10'>
            <img src={avatar} width={36} height={36} style={{borderRadius: '50%'}} />
            <div className='flex-col-start'>
                <a style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{text}</a>
                <p className=''>{time} <a>{name}</a></p>
            </div>
        </div>
        </Col>
    </Row>
  )
}

export default ForumCardRow
