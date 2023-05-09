import { useNavigate } from 'react-router-dom';


export default function useNavigation() {
  const navigate = useNavigate();

  function navigateTo(route) {
    navigate(route);
  }

  return { navigateTo };
}