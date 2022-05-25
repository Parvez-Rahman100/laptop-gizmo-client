import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
           <h2 className='text-4xl font-bold text-secondary'>Dashboard</h2>
           {/* Page content here  */}
           <Outlet ></Outlet>
          <label for="sidebar" class="btn btn-primary drawer-button lg:hidden">Press to see menu</label>
        
        </div> 
        <div class="drawer-side">
          <label for="sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
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