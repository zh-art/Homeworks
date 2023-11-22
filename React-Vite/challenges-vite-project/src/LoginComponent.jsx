import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle } from './store/slices/auth/Thunks';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(signInWithGoogle());
  };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
      {authState.error && <p>Error: {authState.error.message}</p>}
    </div>
  );
};

export default LoginComponent;
