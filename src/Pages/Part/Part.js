import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const navigate = useNavigate();
    const {img,name,description,_id, availableQuantity,minimumOrder,price} = part;
    const handlePurchase = (id)=>{
        navigate(`partsDetails/${id}`)
    }
    return (
        <div>
            <div className="card max-w-lg bg-base-100 p-8 shadow-xl rounded-xl">
  <figure><img className=' rounded-xl' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h4>Price : {price}</h4>
    <h6>Available Quantity : {availableQuantity}</h6>
    <h6>Minimum Order : {minimumOrder}</h6>
    <p>{description.slice(0,35)}...<span className='font-bold'>Read More</span></p>
    <div className="card-actions justify-end">
      <button onClick={()=>handlePurchase(_id)} className="btn text-white btn-primary mt-8">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Part;