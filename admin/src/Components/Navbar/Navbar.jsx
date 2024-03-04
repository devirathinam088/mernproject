import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
// import navProfile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className="nav-logo " style={{ width: '70px', height: 'auto', marginRight: '4px'}} />
      {/* <img src={navProfile} alt="" className="nav-profile" /> */}
    </div>
  )
}

export default Navbar
