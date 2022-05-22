import React, { useEffect, useState } from 'react';
import LaptopPart from '../LaptopPart.js/LaptopPart';

const LaptopParts = () => {const [parts,setParts] = useState([]);
    useEffect(()=>{
        const url = 'https://laptopgizmo.herokuapp.com/parts';
        fetch(url)
        .then(res=>res.json())
        .then(data =>setParts(data))
    },[])
    return (
        <div className='d-grid grid-cols-3'>
            {
                parts.map(part=><LaptopPart
                key={part._id}
                part={part}
                ></LaptopPart>)
            }
        </div>
    );
};

export default LaptopParts;