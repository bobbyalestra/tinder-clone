import React from 'react'
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person"
import  {IconButton }  from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

function Header() {
    return (
        <div className='header'>
           
            <IconButton>
            <PersonIcon fontSize="large" className="header-icon" />
            </IconButton>
         
            <IconButton>
            <AccessibilityNewIcon fontSize="large" className="header-icon" />
            </IconButton>

        <IconButton>
        <ForumIcon fontSize="large" className="header-icon"  />
        </IconButton>
        
        </div>
    )
}

export default Header
