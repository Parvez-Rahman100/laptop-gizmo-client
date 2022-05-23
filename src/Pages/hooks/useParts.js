import  { useEffect, useState } from 'react';

const useParts = () => {
    const [parts,setParts] = useState([]);
    useEffect(()=>{
        const url = 'https://laptopgizmo.herokuapp.com/parts';
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data =>setParts(data))
    },[]);
    return [parts];
};

export default useParts;