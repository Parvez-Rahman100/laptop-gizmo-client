import React from 'react';

const LaptopPart = ({part}) => {
    const {name,img,price,description,availableQuantity,minimumOrder}= part;
    return (
        <div>
            <img style={{width:'200px'}} src={img} alt="img" />
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <p>{description}</p>
            <p>{availableQuantity}</p>
            <p>{minimumOrder}</p>
            <button className='btn btn-primary'>Purchase</button>
        </div>
    );
};

export default LaptopPart;