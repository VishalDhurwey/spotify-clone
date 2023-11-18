import React from 'react'
import "./Footer.css"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RepeatIcon from '@mui/icons-material/Repeat';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_left'>
            <p>Album and songs detail</p>
        </div>

        <div className='footer_center'>
            <ShuffleIcon className='footer_green'/>
            <SkipPreviousIcon className='footer_icon'/>
            <PlayCircleIcon fontSize='large' className='footer_icon'/>
            <SkipNextIcon className='footer_icon'/>
            <RepeatIcon className='footer_green'/>
        </div>

        <div className='footer_right'>
            <p>volume control</p>
        </div>
    </div>
  )
}

export default Footer
