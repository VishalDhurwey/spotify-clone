import React from 'react';
import "./SidebarImage.css"


function SidebarImage({mini, title}) {
    console.log(mini);
  return (
    <div className='sidebarImage'>
        <img src={mini} alt=''/>
        <p>{title}</p>
    </div>
  );
}

export default SidebarImage;
