import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
           <h2 className='text-4xl font-bold text-secondary'>Dashboard</h2>
           {/* Page content here  */}
           <Outlet ></Outlet>
          <label for="sidebar" className="btn btn-primary drawer-button lg:hidden">Press to see menu</label>
        
        </div> 
        <div className="drawer-side">
          <label for="sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
             {/* Sidebar content here  */}
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
            <li><Link to='/dashboard/addreview'>Add Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;