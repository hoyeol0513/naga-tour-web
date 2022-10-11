import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Test = () => {
    const [hello, setHello] = useState("");
    useEffect(()=>{
    axios.get('http://localhost:8081/api/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
    },[]);
    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
};

export default Test;