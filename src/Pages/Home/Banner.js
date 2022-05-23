import React from 'react';
import banner from '../../assests/banner.jpg'

const Banner = () => {
    return (
        <div> 
            <div  className="hero min-h-screen bg-base-100">
  <div  className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='hero' />
    <div>
      <h1  className="text-5xl font-bold">Box Office News!</h1>
      <p  className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button  className="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;