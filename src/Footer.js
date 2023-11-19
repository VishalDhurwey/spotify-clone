import React from 'react'
import "./Footer.css"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import LyricsIcon from '@mui/icons-material/Lyrics';
import DevicesIcon from '@mui/icons-material/Devices';
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_left'>
           <img 
           className='footer_albumlogo'
           src='https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02' alt=''/>
           <div className='footer_songinfo'>
            <h4>Circles</h4>
            <p>Post Malone</p>
           </div>
        </div>

        <div className='footer_center'>
          <div className='controls'>
          <ShuffleIcon className='footer_green'/>
            <SkipPreviousIcon className='footer_icon'/>
            <PlayCircleIcon fontSize='large' className='footer_icon'/>
            <SkipNextIcon className='footer_icon'/>
            <RepeatIcon className='footer_green'/>
          </div>
            <div className='slider'>
              <p>0:00</p>
                <Slider size="small"/>
                <p>2:46</p>
            </div>
        </div>
      

        <div className='footer_right'>
            <Grid container spacing={2}>
              <Grid item>
                <SlideshowIcon/>
              </Grid>
              <Grid item>
                <LyricsIcon/>
              </Grid>
              <Grid item>
                <QueueMusicRoundedIcon/>
              </Grid> 
              <Grid item>
                <DevicesIcon/>
              </Grid>            
              <Grid item>
                <VolumeDownRounded/>
              </Grid>
              <Grid item xs>
                <Slider size="small"/>
              </Grid>
              <Grid item>
                <PictureInPictureIcon/>
              </Grid>
              <Grid item>
                <FullscreenIcon/>
              </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer
