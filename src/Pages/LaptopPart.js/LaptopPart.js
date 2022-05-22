import React from 'react';
import { useNavigate } from 'react-router-dom';

const LaptopPart = ({part}) => {
    const {name,img,_id,price,description,availableQuantity,minimumOrder}= part;
    const navigate = useNavigate();

    const handlePurchase = (id) =>{
       navigate(`/${id}`);
    }
    return (
    <div className=' p-6'>
        
         <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body ">
            <h2 class="card-title">{name}</h2>
            <h4>Price : ${price}</h4>
            <h6>Available Quantity : {availableQuantity}</h6>
            <h6>Minimum Order : {minimumOrder}</h6>
            <p>{description.slice(0,35)}...<span className='font-bold'>Read More</span></p>
            <div class="card-actions justify-end">
            <button onClick={()=>handlePurchase(_id)} class="btn btn-primary text-white block mx-auto my-2">Buy Now</button>
            </div>
        </div>
    </div>
</div>
    );
};

export default LaptopPart;