import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/fb-logo.png'
import Search from '../../img/search.png'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img alt='logo' src={Logo}></img>
        
        <div className="Search">
          <input type='text' placeholder='Search....'></input>
          <div className="s-icon">
            <img src={Search} alt="search" />
          </div>
          
        </div>
    </div>
  )
}

export default LogoSearch