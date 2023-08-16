import * as React from 'react';

import { getAuth, onAuthStateChanged, signOut } from '../firebaseConfig';

const { createContext, useEffect, useState } = React;

const auth = getAuth();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch(console.log);
  }

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          image: user.photoURL
        });
      }
    });

  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      logout: handleLogout,
      updateUser: setUser
    }}>
      {children}
    </AuthContext.Provider>
  );

};