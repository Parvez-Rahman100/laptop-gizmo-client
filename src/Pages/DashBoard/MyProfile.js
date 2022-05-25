import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrder from '../hooks/useOrder';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    
    const [orders] = useOrder();
    return (
        <div className="my-10"> 
            
            <img className=' w-32 rounded-full' src={user?.photoURL}  alt="User Img " />
            <h1 className='text-2xl my-4'>Hi I am  <span className='ml-2  text-4xl text-secondary'>{user?.displayName}</span></h1>
            {
                orders.map(order => <div> 
                    <h2>I Live in {order?.address}</h2>
                    <h2>My Phone Number is {order?.phone}</h2>
                </div>)
            }
        </div>
    );
};

export default MyProfile;