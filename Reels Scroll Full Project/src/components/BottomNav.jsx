import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import homeicon from '../images/bottombar/home.png';
import iconactive from '../images/bottombar/icon-active.png';
import cat from '../images/bottombar/middle-img.png';
import { FaEnvelope } from "react-icons/fa";
import saveicon from '../images/bottombar/saveicon.svg'
import { CgProfile } from "react-icons/cg";
import handleRedirect from '../common/handleRedirect';

export default function BottomNav() {
  return (
    <>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 500, fontSize: "14px" }} elevation={3}>
        <div className='bottom-nav' onClick={handleRedirect}>

          <span className='cat-img-wrapper'><img src={cat} className='cat-img' alt="" /></span>
          <div className='bottom-nav-item p-3' style={{ backgroundImage: `url(${iconactive})` }}>
            <div className='bottom-nav-icon'><img src={homeicon} alt="" className='homeimg' /></div>
          </div>
          <div className='bottom-nav-item'>
            <div className='bottom-nav-icon h-[50px] w-[50px]'><FaEnvelope size={25} /></div>
          </div>
          <div className='bottom-nav-item '>
            <div className='bottom-nav-icon h-[50px] w-[50px]'><img src={cat} className='h-10' alt="" /></div>
          </div>
          <div className='bottom-nav-item'>
            <div className='bottom-nav-icon h-[50px] w-[50px]'><img src={saveicon} alt="" className='homeimg' /></div>
          </div>
          <div className='bottom-nav-item'>
            <div className='bottom-nav-icon h-[50px] w-[50px]'><CgProfile size={26} /></div>
          </div>
        </div>
      </Paper>

    </>
  );
}
