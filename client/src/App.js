import React, { useEffect, useState } from 'react'
import Header from './Header'
import RouterPage from './RouterPage'
import axios from 'axios'

const App = () => {
  const [isConnect,setIsConnect] = useState('don\'t connected');
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/')
      .then((res)=>{
        console.log(res.data);
        setIsConnect(res.data.message)
      })
      .catch((err)=>{
        console.error('err :' ,err)
      })
  },[])
  return (
    <div>
      <Header/>
      <RouterPage />
      <h1>app page : {isConnect}</h1>
    </div>
  )
}

export default App
