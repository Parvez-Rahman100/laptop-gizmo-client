import React from 'react';
import usePart from '../hooks/usePart';


const PartsDetails = () => {
    const [parts] = usePart();
    return (
        <div className=' flex justify-center items-center'>
        
         <div className="card lg:max-w-lg my-12 bg-base-100 shadow-xl">
        <figure><img src={parts.img} alt="Shoes" /></figure>
            <div className="card-body ">
            <h2 className="card-title">{parts.name}</h2>
            <h4>Price : ${parts.price}</h4>
            <h6>Available Quantity : {parts.availableQuantity}</h6>
            <h6>Minimum Order : {parts.minimumOrder}</h6>
            <p>{parts.description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary text-white block mx-auto my-2">Buy Now</button>
            </div>
        </div>
    </div>
</div>
    );
};

export default PartsDetails;