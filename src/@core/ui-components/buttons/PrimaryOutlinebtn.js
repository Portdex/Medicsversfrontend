import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'
import { handleCategory } from '../../../redux/category'

const PrimaryOutlinebtn = (props) => {
  const { text, path, id } = props
  const history = useHistory()
  const dispatch = useDispatch()
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
      onClick={() => {
        dispatch(handleCategory(id))
        history.push(path)
      }}
    >
      <span className='text_primary_3'>{text}</span>
    </Button>
  )
}

export default PrimaryOutlinebtn
