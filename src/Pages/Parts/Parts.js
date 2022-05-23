import React from 'react';
import useParts from '../hooks/useParts';
import Part from '../Part/Part';

const Parts = () => {
    const [parts]  = useParts();
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
                parts.slice().reverse().map(part=><Part
                key={part._id}
                part={part}
                ></Part>)
            }
        </div> 
        </div>
    );
};

export default Parts;