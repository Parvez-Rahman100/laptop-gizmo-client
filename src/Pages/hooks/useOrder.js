import  { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useOrder = () => {
    const [orders,setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        if(user){
            fetch(`https://laptopgizmo.herokuapp.com/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }
    },[user]) ;
    return [orders];
};

export default useOrder;