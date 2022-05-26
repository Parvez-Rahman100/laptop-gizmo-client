import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const {data : users, isLoading,refetch} = useQuery('users',()=>fetch('https://laptopgizmo.herokuapp.com/users',{
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        <h1>All Users : {users.length}</h1> 
        <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th className='text-center'>User Id</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      
      {
          users.map((user,index)=><User
          key={user._id}
          index={index}
          user={user}
          refetch={refetch}
          ></User>)
      }
     
    </tbody>
  </table>
</div>     
        </div>
    );
};

export default Users;