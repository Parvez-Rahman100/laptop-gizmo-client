import React from 'react';

const User = ({user,index}) => {
    const {email,_id} = user;
    console.log(user);
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{_id}</td>
        <td>Blue</td>
      </tr>
    );
};

export default User;