import React from 'react';
import "./Header.css";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className='header'>
      <div className='header_left'>
        <Grid item>
            <ArrowBackIosOutlinedIcon className='header_icon'/>
        </Grid>
        <Grid item>
            <ArrowForwardIosOutlinedIcon className='header_icon'/>
        </Grid>

      </div>
      <div className='header_right'>
        <Grid item>
            <NotificationsIcon className='header_icon1'/>
        </Grid>
        <Avatar className='header_icon1' src={user?.images[0].url} alt={user?.display_name}/>
      </div>
    </div>
  )
}

export default Header
