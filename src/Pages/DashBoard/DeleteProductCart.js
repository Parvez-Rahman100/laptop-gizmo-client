import React from 'react';
import useParts from '../hooks/useParts';


const DeleteProductCart = ({ product, index }) => {
    const { name, _id } = product
    const { products, setProducts } = useParts()


    const handleProductsDelete = id => {
        const proceed = window.confirm('Are tou Sure?')
        if (proceed) {
            const url = `https://medz-app.herokuapp.com/parts/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <tr>
            <th className='font-semibold text-center bg-cyan-100 '>{index + 1}</th>
            <td className='font-semibold text-start bg-cyan-100 '>{name}</td>
            <td className='font-semibold text-start bg-cyan-100 '>{_id}</td>
            <td className='font-semibold text-start bg-cyan-100 '></td>
            <td className='font-semibold text-center bg-cyan-100 '>
                <button
                    onClick={() => handleProductsDelete(product._id)}
                    className='btn btn-primary px-5 py-2 rounded text-white font-bold'
                >Delete
                </button>
            </td>
        </tr>
    );
}


export default DeleteProductCart;