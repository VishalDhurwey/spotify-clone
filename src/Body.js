import React from 'react';
import "./Body.css";
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function Body({spotify}) {

    const[{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify}/>
      
      <div className='body_info'>
        <img src={discover_weekly?.images[0].url} alt=''/>

        <div className='body_infotext'> 
        <strong>Playlist</strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
        {/* <p>Made for Vishal Dhurwey 30 songs, about 1 hr 30 min</p> */}
        </div>

      </div>

      <div className='body_songs'>
          <div className='body_icons'>
            <PlayCircleFilledIcon fontSize='large' className='body_shuffle'/>
            <FavoriteBorderOutlinedIcon fontSize='large'/>
            <MoreHorizOutlinedIcon fontSize='large'/>
          </div>

        {/* List of Songs */}
        {discover_weekly?.tracks.items.map(items =>
            <SongRow track={items.track}/>
          )}
      </div>
    </div>
  );
}

export default Body
