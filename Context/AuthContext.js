"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth } from "../app/firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const restPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };
  const updateUserEmail = (email) => {
    updateEmail(auth.currentUser, email);
  };
  const updateUserPassword = (password) => {
    updatePassword(auth.currentUser, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe;
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ currentUser, signup, logOut, logIn, restPassword, updateUserEmail, updateUserPassword }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
