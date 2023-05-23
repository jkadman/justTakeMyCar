import useNavigation from './hooks/navigate';
import { useState } from 'react';
import FetchData from './hooks/fetchdata';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@1,900&display=swap');
</style>

export default function Header() {
  const [userData, setUserData] = useState(null);

  // connects to link navigation hook
  const { navigateTo } = useNavigation();
  
  const handleUserData = (data) => {
    setUserData(data);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  
  const userId = userData?.user?.id
  console.log('headerUD', userData?.user?.id)

  // change rendering if userId is present
  const changeLogin = () => {
    if (userId) {
      return (
        <>
        <button className="loginButton" onClick={handleLogout}>Logout</button>
        <button className="registerButton" onClick={() => navigateTo('/Userpage')}>Userpage</button>
        </>
      )
    } else {
      return (
        <>
          <button className="loginButton" onClick={() => navigateTo('/login')}>Login</button>
          <button className="registerButton" onClick={() => navigateTo('/register')}>Register</button>
        </>
      )
    }
  }

  return (
    <div className="parentDiv">
    <FetchData onDataReceived={handleUserData} />
    <header className="header">
      <span className="headerSection registerLink">
        <button className="registerLink" onClick={() => navigateTo('/Registercar')}>Register My Car</button>
      </span>
      <span className="headerSectiontitle">
        <h1 onClick={() => navigateTo('/')}>Just Take My Car</h1>
      </span>
      <span className="headerSection buttons">
        {changeLogin()}
      </span>
    </header>
    </div>
  );
      }


