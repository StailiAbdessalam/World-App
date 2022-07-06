import axios from "axios";
import React from "react";
import { useState } from "react";
const Contries = () => {
  const [data, setData]: any = useState([]);
  
  axios.get('https://restcountries.com/v3.1/all').then((res)=>{
    setData(res.data);
    
  })
  console.log(data);
  
  return (
    <div>

    </div>
  )
};

export default Contries;
