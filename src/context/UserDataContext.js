import React, { createContext, useState, useEffect } from 'react';
import fire from '../firebase';

export const UserDataContext = createContext();

const Providerfirebase = (props) => {
    const [ user, setUser ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ hasAccount, setHasAccount ] = useState(false);
  
    const clearInputs = () => {
      setEmail('');
      setPassword('');
    }
  
    const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
    }
  
    const handleLogin = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          switch (error.code) {
            case 'auth/ivalid-email':
            case 'auth/user-disabled':
            case 'auth/user-not-found':
              setEmailError(error.message)
              break;
            case 'auth/weak-password':
              setPasswordError(error.message)
              break;
          }
        });
    }
  
    const handleSignUp = () => {
      clearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          switch (error.code) {
            case 'auth/email-already-in-use':
            case 'auth/invalid-email':
              setEmailError(error.message)
              break;
            case 'auth/weak-password':
              setPasswordError(error.message)
              break;
          }
        });
    }
  
    const handleLogout = () => {
      fire.auth().signOut();
    }
  
    const authListener = () => {
      console.log(fire)
      // fire.auth().onAuthStateChanged(user => {
      //   if (user) {
      //     clearInputs();
      //     setUser(user);
      //   } else {
      //     setUser('');
      //   }
      // })
    }
  
    useEffect(() => {
      authListener()
      // eslint-disable-next-line
    }, [])

    return (
        <UserDataContext.Provider 
            value={{
              user,
              email,
              setEmail,
              emailError,
              password,
              setPassword,
              passwordError,
              handleLogin,
              handleSignUp,
              handleLogout,
              setHasAccount,
              hasAccount
            }}
        >
            {props.children}
        </UserDataContext.Provider>
    )
}
 
export default Providerfirebase;