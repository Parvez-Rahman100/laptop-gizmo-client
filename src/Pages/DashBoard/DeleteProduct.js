import React, { useEffect, useState } from 'react';
import DeleteProductCart from './DeleteProductCart';

const DeleteProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://laptopgizmo.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            <h1 className='text-center text-3xl font-extrabold mt-5'>Product List </h1>
            <h1 className='text-center text-xl font-bold mt-5'>Total Products :{products.length}</h1>
            <div className="overflow-x-auto mx-5">
                <table className="table w-full my-10 ">
                    <thead className='bg-cyan-400'>
                        <tr>
                            <th className='bg-cyan-400'></th>
                            <th className='text-sm font-extrabold text-Start '>Product Name</th>
                            <th className='text-sm font-extrabold text-start '>Product Id</th>
                            <th className='text-sm font-extrabold text-center '></th>
                            <th className='text-sm font-extrabold text-center '></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <DeleteProductCart
                                index={index}
                                key={product._id}
                                product={product}
                            ></DeleteProductCart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default DeleteProduct;