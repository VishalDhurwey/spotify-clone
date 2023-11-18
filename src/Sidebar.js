import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

    // const[{playlist}, dispatch] = useDataLayerValue();
    // console.log(playlist);

  return (
    <div className='sidebar'>
      
      <div className='sidebar1'>

        <SidebarOption Icon={HomeOutlinedIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>

        
      </div>
      <div className='sidebar2'>
        
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
       
        {/* {playlist?.items?.map((playlist)=>(
            <SidebarOption title={playlist.name}/>
        ))} */}
         

      </div>
    </div>
  );
}

export default Sidebar
