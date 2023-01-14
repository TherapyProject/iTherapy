import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../backend/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    const authtest = getAuth();
    signInWithPopup(authtest, provider).then((result) => {
      setCurrentUser(result.user);
    });
  };

  const value = useMemo(
    () => ({ currentUser, signup, signInWithFacebook }),
    [currentUser, signup, signInWithFacebook]
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
