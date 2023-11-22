import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Registro from './Registro';
import LoginComponent from './LoginComponent';

const useMemoAuth = () => {
  const user = useSelector(state => state.auth.user);

  const isUserAuthenticated = useMemo(() => {

    return user != null;
  }, [user]);

  return (
    <div>
      <button disabled={isUserAuthenticated} onClick={() => <Registro />}>Registrarse</button>
      <button onClick={() => <LoginComponent />} disabled={isUserAuthenticated}>Iniciar Sesión</button>
    </div>
  );
};

export default useMemoAuth;
