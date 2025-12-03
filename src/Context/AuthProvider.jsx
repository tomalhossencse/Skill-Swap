import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGoogleSigninFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const handleSignInFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutFunc = () => {
    setLoading(true);

    return signOut(auth);
  };
  const updateProfileFunc = (user, displayName, photoURL) => {
    return updateProfile(user, {
      displayName,
      photoURL,
    });
  };
  const handleSignUpFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleForgetPasswordFunc = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);
  const context = {
    handleGoogleSigninFunc,
    handleSignInFunc,
    user,
    setUser,
    loading,
    setLoading,
    logoutFunc,
    updateProfileFunc,
    handleSignUpFunc,
    handleForgetPasswordFunc,
  };
  return <AuthContext value={context}>{children}</AuthContext>;
};

export default AuthProvider;
