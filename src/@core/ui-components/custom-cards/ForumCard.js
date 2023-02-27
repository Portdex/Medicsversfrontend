import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { AvatarIcon } from '../../../assets/images/avatars'

// ** style
import './common-cards.scss'
import ForumCardRow from './ForumCardRow'

const ForumCard = () => {
  return (
    <Card className='shadow-none' style={{border: '1px solid #ececec', borderRadius: 4, padding: 0}}>
    <CardHeader className='forum-header'>
        <Link>Public Figure Gossip</Link>
    </CardHeader>
    <CardBody className='p-0'>
       <ForumCardRow cat='Families' thread='1.9K' message='1.8M' views='201.7M' avatar={AvatarIcon} text1='Carla Crozier - crozierquadsplus1' time='53 minutes ago' name='stinkyonesie'/>
       <hr style={{marginTop: -15, marginBottom: 0}}/>
       <ForumCardRow cat='Gurus' thread='1.4K' message='1.2M' views='192.1M' avatar={AvatarIcon} text1="TeamRH #11 WJS thinks he's the main man, but he's just full of shit and a desperate Dan" time='57 minutes ago' name='Dee-Dee'/>
       <hr style={{marginTop: -15, marginBottom: 0}}/>
       <ForumCardRow cat='Families' thread='1.9K' message='1.8M' views='201.7M' avatar={AvatarIcon} text1='Carla Crozier - crozierquadsplus1' time='53 minutes ago' name='stinkyonesie'/>
       <hr style={{marginTop: -15, marginBottom: 0}}/>
       <ForumCardRow cat='Gurus' thread='1.4K' message='1.2M' views='192.1M' avatar={AvatarIcon} text1="TeamRH #11 WJS thinks he's the main man, but he's just full of shit and a desperate Dan" time='57 minutes ago' name='Dee-Dee'/>
    </CardBody>
</Card>
  )
}

export default ForumCard
