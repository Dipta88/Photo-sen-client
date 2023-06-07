import React from 'react';
import logo from '../../../assets/images/logo.png'
const NavBar = () => {
    return (
        
        <div className="navbar bg-base-100 text-gray-50 text-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
    </div>
    <img className='ml-10' src={logo} alt='logo'></img>
    <a className="btn btn-ghost normal-case text-xl">Photosen</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabIndex={0}>
       
      </li>
      <li><a>Instructor</a></li>
      <li tabIndex={0}></li>
      <li><a>Classes</a></li>
      <li tabIndex={0}></li>
      <li><a>Dashboard</a></li>
      <li tabIndex={0}></li>
      <li><a>User Profile</a></li>
      <li tabIndex={0}></li>
      <a className="btn">Log In</a>
    </ul>
  </div>

</div>
    );
};

export default NavBar;