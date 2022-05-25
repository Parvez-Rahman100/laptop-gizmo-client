import React from 'react';

import useOrder from '../hooks/useOrder';

const MyOrders = () => {
    const [orders] = useOrder();
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
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
            orders.map((order,index)=><tr key={index}>
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