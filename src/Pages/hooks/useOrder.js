import { signOut } from 'firebase/auth';
import  { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const useOrder = () => {
    const [orders,setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            fetch(`https://laptopgizmo.herokuapp.com/order?email=${user.email}`,{
                method:"GET",
                headers:{
                    "authorization":`Bearar ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res=>{
            console.log('res',res);
            if(res.status === 401 || res.status===403){
                navigate('/')
                signOut(auth);
                 localStorage.removeItem('accessToken')
            }
          return res.json()})
        .then(data=>{
            
            setOrders(data)})
    }
    },[user]) ;
    return [orders];
};

export default useOrder;