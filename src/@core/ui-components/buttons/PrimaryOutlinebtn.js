import React from 'react'
import { Button } from 'reactstrap'

const PrimaryOutlinebtn = (props) => {
  const { text } = props
  return (
    <Button
      outline
      color='primary'
      style={{
        borderRadius: 4,
        paddingTop: 11,
        paddingBottom: 11,
        paddingRight: 16,
        paddingLeft: 16
      }}
      className='text-primary'
    >
      <span className='text_primary_3'>{text}</span>
    </Button>
  )
}

export default PrimaryOutlinebtn
