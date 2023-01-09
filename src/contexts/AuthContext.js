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
  // need to search what does mean
  const value = useMemo(() => ({ currentUser, signup }), [currentUser, signup]);
  // const value = {
  //   currentUser,
  //   signup,
  // };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
