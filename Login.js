import React from 'react';
import {useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


 
  function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
 
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submitted');
  
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify(`{username:${username}, password:${password}}`)
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === '200 OK') {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.id);
        } else {
          setError(true);
          console.log("error");
        }
      })
      .catch(err => {
        setError(true);
      });
    }
  return (
         <div>
          <h1>LOGIN FORM</h1>
          <form onSubmit={handleSubmit}>
            <div className="loginDetails">
          
            <input type="text" placeholder='USERNAME' value={username} onChange={e => setUsername(e.target.value)} />
          
          </div>
          <div className="loginDetails">
         
            <input type="password" placeholder='PASSWORD' value={password} onChange={e => setPassword(e.target.value)} />
          
          </div>
          {error&&<div className="error">ERROR : failed to Fetch</div>}
          <button type="submit">Login</button>
          
        </form>
        </div>
     
  );
}

export default Login;
