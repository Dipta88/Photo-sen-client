import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaHome } from 'react-icons/fa'

const Dashboard = (props) => {
    return (
        <div className="drawer drawer-mobile bg-slate-800 lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  <Outlet></Outlet>
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
        <li><NavLink to="/dashboard"><FaHome></FaHome>User Home</NavLink></li>
      <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
      <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>Payment</NavLink></li>
      <div className="divider"></div>
      <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;