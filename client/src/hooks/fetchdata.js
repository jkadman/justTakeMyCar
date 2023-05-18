import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import axios  from 'axios'


  

export default function FetchData ({ onDataReceived }) {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
useEffect(() => {
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/Userpage', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onDataReceived(response.data.user);
      // example of how to access user data
      console.log('userdata', response.data.user.user.id)
      setIsAuth(false);
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
      setIsAuth(false);
    }
  };

  fetchUserData();
}, []);

if (isAuth) {
  return <p>Loading...</p>
}

if (!isAuthenticated) {
  return <Navigate replace to ="/login" />;
}
}

