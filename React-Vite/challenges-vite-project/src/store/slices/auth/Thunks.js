import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { register } from "./AuthSlice";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { signOut } from 'firebase/auth';

const loginSuccess = (user) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: user
    };
  };
  
  const loginError = (error) => {
    return {
      type: 'LOGIN_ERROR',
      payload: error
    };
  };

const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS',
  };
};

const logoutError = (error) => {
  return {
    type: 'LOGOUT_ERROR',
    payload: error,
  };
};

export const registerAuth = ( email, password ) => {
    return async (dispatch) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if(response) {

            await updateProfile (auth.currentUser, {
                displayName: "Juan",
                photoURL: ""
            })

            const { email } = response.user
            dispatch(register({email}))
        } else {
            throw new Error("login failed")
        }
    }
}

export const signInWithGoogle = () => {
    return (dispatch) => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      provider.setCustomParameters({ 'login_hint': 'user@example.com' });
  
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          dispatch(loginSuccess(user));
        })
        .catch((error) => {
          dispatch(loginError(error));
        });
    };
  };

export const signOutUser = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logoutSuccess());

      })
      .catch((error) => {
        dispatch(logoutError(error));
      });
  };
};
