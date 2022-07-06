import Contries from '../Components/Contries'
import { useState } from 'react'
const Home = () => {
  const [data,setData]:any = useState([]);
  
  return (
    <div>
        <Contries/>
    </div>
  )
}

export default Home