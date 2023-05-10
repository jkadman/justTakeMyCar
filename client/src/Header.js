import useNavigation from './hooks/navigate';



export default function Header() {
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
        <h1><a href="#">Register My Car</a></h1>
      </span>
      <span className="headerSection title">
        <h1>Just Take My Car</h1>
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
