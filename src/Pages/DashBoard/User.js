import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,index,refetch}) => {
    const {email,_id,role} = user;
    const makeAdmin = () =>{
        fetch(`https://laptopgizmo.herokuapp.com/user/admin/${email}`,{
            method:"PUT",
            headers:{
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res=>{
            if(res.status === 403){
                toast.error('Failed to create admin')
            }
            return res.json()})
        .then(data => {
            if(data.modifiedCount>0){
                refetch()
                toast.success('Successfully admin created')
            }
            refetch()
            
        })

    }
    console.log(user);
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{_id}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      </tr>
    );
};

export default User;