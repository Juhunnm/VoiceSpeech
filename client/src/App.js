import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [msg, setMsg] = useState('');
  const [test,setTest] = useState("");
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then((res) => {
        console.log(res.data);
        setMsg(res.data.message);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);
  const handleTextChange = (e) => {
    setTest(e.target.value)
  }
  const handleTestButton = () =>{
    setMsg(test);
    axios.get('')
  }
  return (
    <div>
      <h1>{msg}</h1>
      <input type="text" value={test} onChange={handleTextChange} ></input>
      <button onClick={handleTestButton}>testbutton</button>
    </div>
  );  
}

export default App;
