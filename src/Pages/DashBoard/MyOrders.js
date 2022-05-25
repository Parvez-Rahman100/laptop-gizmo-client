import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders,setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        if(user){
            fetch(`https://laptopgizmo.herokuapp.com/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }
    },[user]) 
        
    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Email</th>
        <th>Order Quantity</th>
        <th>Order Id</th>
      </tr>
    </thead>
    <tbody>

        {
            orders.map(order=><tr>
                <th>1</th>
                <td>{order.productName}</td>
                <td>{order.email}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.orderId}</td>
              </tr>)
        }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;