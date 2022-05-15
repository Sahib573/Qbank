import React, { useContext, useEffect, useState } from "react";
import { auth, googleAuth } from "../../firebase-config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function googleLogin() {
    await auth
      .signInWithPopup(googleAuth)
      .then(() => {
        window.location.href = "/";
        return "success";
      })
      .catch((err) => {
        console.log(err);
        return "error";
      });
  }

  async function logout() {
    try {
      await auth.signOut();
      return "success";
    } catch (err) {
      console.log(err);
      return "error";
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
