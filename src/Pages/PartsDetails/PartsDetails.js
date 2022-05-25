import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import usePart from '../hooks/usePart';

const PartsDetails = () => {
    const [user] = useAuthState(auth);
    const [parts] = usePart();
    const {_id,img,name,price,availableQuantity,minimumOrder,description} = parts;

    const [values, setValues] = useState({
         name: "",
         email:"",
         quantity:"",
         address:"",
         phone:"",
    })

    const handleChange = (e)=> {
      const {name , value}= e.target;
       setValues({...values, [name]:value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const order ={
        orderId : _id,
        productName : name,
        name : e.target.name.value,
        email : e.target.email.value,
        phone : e.target.phone.value,
        orderQuantity : e.target.quantity.value,
        address : e.target.address.value
      }
      
      if(Number(values.quantity ) <  minimumOrder || ((Number(values.quantity)) > availableQuantity )){
        toast.error(`Value can not be lower than ${minimumOrder}
        && Value can not be higher than ${availableQuantity}`)
        return;
      }
      else{
        // toast.success('Success')
      }

      fetch('https://laptopgizmo.herokuapp.com/order',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.success){

          toast.success(`Successfully added ${name}`)
        }
        else{
           toast.error(`You already have added this ${name} product`)
        }
      })
      e.target.reset()
      
      
    }
    
    
    return (
        <div className='mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 my-20'>
          
            <div className='flex justify-center items-center my-10'>
            <div className="card max-w-xs bg-base-100  shadow-xl">
  <figure><img src={img} alt="Laptop Parts" /></figure>
  <div className="card-body">
  <div className='flex justify-between items-center '>
    <h2 className="card-title"> {name}</h2>
    <h4 className='font-bold'>Price:${price}</h4>
    </div>
    <h6>Available Quantity : <span className='font-bold'>{availableQuantity}</span></h6>
    <h6>Minimum Order : <span className='font-bold'>{minimumOrder}</span></h6>
    <p>{description}</p>
  </div>
</div>
        </div>
        <div className=' mt-10 mx-auto ' >
          <h1 className='text- center text-2xl text-secondary font-bold mb-2'>Order Details</h1>
        <form className=' px-20 py-5 drop-shadow-2xl mx-auto shadow-2xl bg-transparent rounded-xl bg-form' onSubmit={handleSubmit}>
      <input value={user.displayName} disabled name='name' className='rounded-lg  pl-2 border-4 my-2  'onChange={handleChange}/>
      <br />
      <input value={user.email} disabled name="email" type='email' className='rounded-lg  pl-2 border-4 my-2 ' onChange={handleChange} />
      <br />
      <input placeholder='Enter your address' name="address" type='text' className='rounded-lg  pl-2 border-4 my-2 ' onChange={handleChange} />
      <br />
      <input placeholder='Enter phone number' name='phone' maxLength='11' className=' rounded-lg border-4 my-2  pl-2' type="number" onChange={handleChange}  />
      <br />
      <input placeholder='Enter quantity' name='quantity' className=' rounded-lg border-4 my-2  pl-2' type="number" onChange={handleChange}  />
      
      <br />
      <input type="submit" value='Purchase' className='btn my-4 btn-primary' />
    </form>
        </div>
        
        </div>
    );
};

export default PartsDetails;