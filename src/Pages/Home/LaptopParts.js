import useParts from '../hooks/useParts';
import LaptopPart from '../LaptopPart.js/LaptopPart';

const LaptopParts = () => {
    const [parts] = useParts();
    return (
       <div>
           <h1 className=' text-center font-bold text-secondary text-4xl mb-28'>Our Laptop Parts</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
                parts.map(part=><LaptopPart
                key={part._id}
                part={part}
                ></LaptopPart>)
            }
        </div>
       </div>
    );
};

export default LaptopParts;