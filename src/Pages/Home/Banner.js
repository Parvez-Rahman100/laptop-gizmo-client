import React from 'react';
import banner from '../../assests/banner.jpg'

const Banner = () => {
    return (
        <div > 
            <div  className="bg-banner rounded-3xl hero min-h-screen bg-base-100">
  <div  className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='hero' />
    <div>
      <h1  className="text-5xl font-bold">Laptop Gizmo is the most reliable gizmo in BD</h1>
      <p  className="py-6">We have covered all of the budget range for laptops. You can also buy a genuine official Apple Macbook Air or Macbook Pro laptop gizmo from our shop. .</p>
      <button  className="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;