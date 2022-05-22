import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const usePart = () => {
    const [parts,setParts] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data=>setParts(data))
    },[id]);
    return [parts];
};

export default usePart;