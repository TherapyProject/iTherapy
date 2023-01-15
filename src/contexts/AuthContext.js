import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { auth } from '../backend/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function isAuth() {
    return currentUser;
  }

  function logout() {
    return auth.signOut();
  }

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    const authFB = getAuth();
    signInWithPopup(authFB, provider);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const authG = getAuth();
    signInWithPopup(authG, provider);
  };

  const value = useMemo(
    () => ({
      currentUser,
      signup,
      login,
      signInWithFacebook,
      signInWithGoogle,
      isAuth,
      logout,
      test,
    }),
    [
      currentUser,
      signup,
      login,
      signInWithFacebook,
      signInWithGoogle,
      isAuth,
      logout,
      test,
    ]
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
