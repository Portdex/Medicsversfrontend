import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input, Label } from 'reactstrap'

// ** style
import './custom-cards/common-cards.scss'
const SearchSection = (props) => {
  const { path } = props
  const history = useHistory()
  return (
    <div className='search-container'>
      <div className='flex-col-start'>
        <Label className='text_white_1'>What</Label>
        <Input style={{ borderRadius: 0, width: 270 }} />
      </div>
      <div className='flex-col-start'>
        <Label className='text_white_1'>Where</Label>
        <Input style={{ borderRadius: 0, width: 270 }} />
        <div className='mt_10 flex-col-end w-100'>
          <u className='text_white_4'>
            <a>Browse Jobs</a>
          </u>
        </div>
 
      </div>
      <Button.Ripple color='#FF00CD' className='Btn-pink search-container-btn'>
        <span className='text_white_5' onClick={() => history.push(path)}>Search Jobs</span>
      </Button.Ripple>
 
    </div>
  )
}

export default SearchSection
