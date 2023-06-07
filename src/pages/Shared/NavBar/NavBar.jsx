import React from 'react';
import logo from '../../../assets/images/logo.png'
const NavBar = () => {
    return (
        
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
    </div>
    <img src={logo} alt='logo'></img>
    <a className="btn btn-ghost normal-case text-xl">Photosen</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
       
      </li>
      <li><a>Item 3</a></li>
      <li tabIndex={0}></li>
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
      <li tabIndex={0}></li>
      <li><a>Item 3</a></li>
      <li tabIndex={0}></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default NavBar;