import React from 'react';
import {useEffect,useState} from 'react';


function Profile() {
    const [user, setUser] = useState({});
  
    useEffect(() => {
      const userId = localStorage.getItem('userId');
  
      fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(err => {
        console.error(err);
      });
    }, []);
  
    return (
      <div>
        <h2>Profile</h2>
        {user && (
          <div>
            <p>Username: {user.firstName}</p>
            <p>Lastname: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            
                      </div>
        )}
      </div>
    );
  }

export default Profile;