import React from 'react';
import useParts from '../hooks/useParts';
import Part from '../Part/Part';
import Loading from '../Shared/Loading';

const Parts = () => {
    const [parts] = useParts();
    return (
        <div>
            {
                parts?.length ? (
                    <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
                        {
                            parts.slice().reverse().map(part => <Part
                                key={part._id}
                                part={part}
                            ></Part>)
                        }
                    </div>
                ) : (
                    <Loading />
                )
            }
        </div>
    );
};

export default Parts;