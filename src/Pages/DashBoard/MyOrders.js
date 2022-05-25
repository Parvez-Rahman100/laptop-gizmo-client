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
        <th className='text-center'>Email</th>
        <th>Order Quantity</th>
        <th className='text-center'>Order Id</th>
      </tr>
    </thead>
    <tbody>

        {
            orders.map((order,index)=><tr key={index}>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.email}</td>
                <td className='text-center'>{order.orderQuantity}</td>
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