import useNavigation from './hooks/navigate';


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
 

  return (
    <header className="header">
      <span className="headerSection registerLink">
        <button className="registerLink" onClick={() => navigateTo('/Registercar')}>Register My Car</button>
      </span>
      <span className="headerSection title">
        <h1 onClick={() => navigateTo('/')}>Just Take My Car</h1>
      </span>
      <span className="headerSection buttons">
        {/* {isLoggedIn ? (
          <button className="buttonContainer" >Logout</button>
        ) : ( */}
          <>
            <button className="loginButton" onClick={() => navigateTo('/login')}>Login</button>
            <button className="registerButton" onClick={() => navigateTo('/register')}>Register</button>
          </>
        {/* )} */}
      </span>
    </header>
  );
      }
  
  
