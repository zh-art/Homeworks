import { useDispatch } from 'react-redux';
import { signOutUser } from './store/slices/auth/Thunks';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  return (
    <button onClick={handleLogout}>Cerrar Sesión</button>
  );
};

export default LogoutButton;
