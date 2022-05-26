import React from 'react';
import { useForm } from 'react-hook-form';
import DeleteProduct from './DeleteProduct';


const ManageItems = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        fetch('https://laptopgizmo.herokuapp.com/parts', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('product added')
            })
    };


    return (
        <div>
            <h1 className='text-center text-3xl font-extrabold mt-5'>Add Product</h1>
            <form className='flex flex-col px-5  lg:w-3/6 mx-auto bg-form p-10 mt-6'
                onSubmit={handleSubmit(onSubmit)}>
                <input className=' font-bold text-black mb-1 p-3 rounded' name='img'
                    placeholder='Photo Url'
                    type="text" {...register("img")} />

                <input className=' font-bold mb-1 p-3 rounded '
                    name='name'
                    placeholder='Product Name'
                    {...register("name",{ required: true })} />

                <textarea className='font-bold mb-1 p-3 rounded '
                    name='description' 
                    placeholder='Description'
                    {...register("description",{ required: true })} />

                <input className='font-bold mb-1 p-3 rounded '
                    name='price'
                    placeholder='Price'
                    type="number" {...register("price",{ required: true })} />

                <input className='font-bold mb-1 p-3 rounded '
                    name='minimumOrder'
                    placeholder='Min Order'
                    type="number" {...register("minimumOrder",{ required: true })} />

                <input className='font-bold mb-1 p-3 rounded '
                    name='availableQuantity'
                    placeholder='Quantity'
                    type="number" {...register("availableQuantity",{ required: true })} />

                <input className='mb-2 w-50 mx-auto bg-prmary mt-2 px-4 py-2 rounded text-large font-semibold btn btn-primary'
                    type="submit"
                    value="Add products" />
            </form>
            <DeleteProduct></DeleteProduct>
        </div>
    );
};

export default ManageItems;