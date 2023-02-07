import React from 'react'
import { Button } from 'reactstrap'

const PrimaryOutlinebtn = (props) => {
  const { text } = props
    return (
    <Button outline color='primary' style={{borderRadius: 0, borderColor: '#081351'}}>
          <span style={{color: '#081351', fontWeight: 'bold'}}>{text}</span>
        </Button>
  )
}

export default PrimaryOutlinebtn
