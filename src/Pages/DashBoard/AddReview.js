import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useOrder from '../hooks/useOrder';



const AddReview = () => {
    const [user] = useAuthState(auth);
    const imgbbKey = '95d8711366009965251a26e8ed6dec64';
    
    const [orders] = useOrder();


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
    const handleAddReview = event => {
        event.preventDefault();
        const img = event.target.reviewerPhoto.files[0];
        const  formData = new FormData(); 
        formData.append('image',img) 
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey} `;
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img = result.data.url;
                const reviews = {
                    productName: name,
                    reviwerPhoto : img,
                    userPhoto : userPhoto,
                    userName : event.target.name.value,
                    email : event.target.email.value,
                    numericReview : event.target.numericReview.value,
                    reviewed : event.target.review.value,
        
                }
                fetch('https://laptopgizmo.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast.success(`successfully reviewed`)
                }
                else{
                    toast.error(`You already reviewed this (${name}) product`)
                }
                
                event.target.reset()
            });
            
            }
            
            
        })

        const name = event.target.productName.value;
        const userPhoto = user.photoURL;

        
        
        if(Number(values.numericReview ) > 5 ){
            toast.error(`Rating should be out of 5`);
            return;
          }

        
    }

    return (
        <div>
            
             <form onSubmit={handleAddReview} className='grid grid-cols-1 p-10 bg-form gap-3 rounded-3xl justify-items-center mt-2'>
                        <input type="text" name="name" value={user.displayName} disabled className="input input-bordered w-full max-w-xs" onChange={handleChange} />
                        <input type="email" name="email" value={user.email} disabled className="input input-bordered w-full max-w-xs" onChange={handleChange} />
                        <input type="number" name="numericReview"  step='0.01' required placeholder='Rating out of 5'  className="input input-bordered w-full max-w-xs" onChange={handleChange} />
                        <textarea type="text" name="review" placeholder="Your Review" required className="input input-bordered w-full p-3 max-w-xs" onChange={handleChange} />
                        <select name="productName" className="select select-bordered w-full max-w-xs">
                        {
                            orders.map((order, index) => {
                                return <option key={index}>{order.productName}</option>
                              })
                        }
                        </select>
                        <input type="file" name="reviewerPhoto" required className="input input-bordered w-full max-w-xs" onChange={handleChange} />
                        <input type="submit" value="Submit" className="btn btn-outline text-white w-full max-w-xs" />
                    </form>
        </div>
    );
};

export default AddReview;