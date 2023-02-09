import React from 'react'
import { Button, Input, Label } from 'reactstrap'

// ** style
import './custom-cards/common-cards.scss'
const SearchSection = () => {
  return (
    <div className='search-container'>
        <div className='flex-col-start'>
        <Label className='text_white_1'>
            What
        </Label>
        <Input style={{borderRadius: 0, width: 270}}/>
        </div>
        <div className='flex-col-start'>
        <Label className='text_white_1'>
            Where
        </Label>
        <Input  style={{borderRadius: 0, width: 270}}/>
        <div className='mt_10 flex-col-end w-100'>
        <u className='text_white_4'><a>Browse Jobs</a></u>
        </div>
        </div>
        <Button.Ripple color='#FF00CD' style={{height: 39, marginTop: 24, border: 'none'}} className='Btn-pink'>
            <span className='text_white_5'>Search Jobs</span>
        </Button.Ripple>
    </div>
  )
}

export default SearchSection
