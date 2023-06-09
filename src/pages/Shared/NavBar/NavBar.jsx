import React, { useContext } from 'react';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 text-gray-50 text-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <img className="ml-10" src={logo} alt="logo" />
        <a className="btn btn-ghost normal-case text-4xl">Photosen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className='text-2xl' href="/">Home</a>
          </li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li>
            <a  className='text-2xl' href="/">Instructor</a>
          </li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li>
            <a  className='text-2xl' href="/">Classes</a>
          </li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li>
            <a  className='text-2xl' href="/">Dashboard</a>
          </li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
          <li tabIndex={0}></li>
      
         
          {user ? (
            <li className="btn">
              <span>{user.displayName}</span>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Log Out
              </button>
            </li>
          ) : (
            <li className="btn">
              <Link className='text-2xl' to="/login">Log In</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
