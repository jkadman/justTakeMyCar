import useNavigation from './hooks/navigate';
import { Navigate } from "react-router-dom";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@1,900&display=swap');
</style>

export default function Header() {
  // connects to link navigation hook
  const { navigateTo } = useNavigation();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  
    const handleLogout = () => {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  


  return (
    <div className="parentDiv">
    <header className="header">
      <span className="headerSection registerLink">
        <button className="registerLink" onClick={() => navigateTo('/Registercar')}>Register My Car</button>
      </span>
      <span className="headerSectiontitle">
        <h1 onClick={() => navigateTo('/')}>Just Take My Car</h1>
      </span>
      <span className="headerSection buttons">
        {/* {isLoggedIn ? (
          <button className="buttonContainer" >Logout</button>
        ) : ( */}
          <>
            <button className="loginButton" onClick={() => navigateTo('/login')}>Login</button>
            <button className="loginButton" onClick={handleLogout}>Logout</button>
            <button className="registerButton" onClick={() => navigateTo('/register')}>Register</button>
          </>
        {/* )} */}
      </span>
    </header>
    </div>
  );
      }


