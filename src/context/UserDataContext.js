// import React, { createContext, useState, useEffect } from 'react';
// import fire from '../fire';

// export const UserDataContext = createContext();

// const ProviderFirebase = (props) => {
//     const indexUserData = {
//       email: null,
//       uid: null,
//       active: false
//     }

//     const [ user, setUser ] = useState(indexUserData);
//     const [ email, setEmail ] = useState('');
//     const [ password, setPassword ] = useState('');
//     const [ emailError, setEmailError ] = useState('');
//     const [ passwordError, setPasswordError ] = useState('');
//     const [ hasAccount, setHasAccount ] = useState(false);
  
//     const clearInputs = () => {
//       setEmail('');
//       setPassword('');
//     }
  
//     const clearErrors = () => {
//       setEmailError('');
//       setPasswordError('');
//     }
  
//     const handleLogin = () => {
//       clearErrors();
//       fire
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .catch((error) => {
//           switch (error.code) {
//             case 'auth/ivalid-email':
//             case 'auth/user-disabled':
//             case 'auth/user-not-found':
//               setEmailError(error.message)
//               break;
//             case 'auth/weak-password':
//               setPasswordError(error.message)
//               break;
//           }
//         });
//     }
  
//     const handleSignUp = () => {
//       clearErrors();
//       fire
//         .auth()
//         .createUserWithEmailAndPassword(email, password)
//         .catch((error) => {
//           switch (error.code) {
//             case 'auth/email-already-in-use':
//             case 'auth/invalid-email':
//               setEmailError(error.message)
//               break;
//             case 'auth/weak-password':
//               setPasswordError(error.message)
//               break;
//           }
//         });
//     }
  
//     const handleLogout = () => {
//       fire.auth().signOut();
//       console.log(user)
//     }
  
//     const authListener = () => {
//       fire.auth().onAuthStateChanged(user => {
//         if (user) {

//           clearInputs();

//           user.getIdTokenResult()
//               .then(idTokenResult => {
//                 console.log(idTokenResult)
//                 if (!!idTokenResult.claims.admin) {
//                   console.log('es admin')
//                   setUser({
//                     email: user.email,
//                     uid: user.user_id,
//                     active: true,
//                     rol: 'admin'
//                   })
//                 } else if (!!idTokenResult.claims.autor) {
//                   console.log('es autor')
//                   setUser({
//                     email: user.email,
//                     uid: user.user_id,
//                     active: true,
//                     rol: 'autor'
//                   }) 
//                 } else {
//                   console.log('es invitado')
//                   setUser({
//                     email: user.email,
//                     uid: user.user_id,
//                     active: true,
//                     rol: 'invitado'
//                   }) 
//                 }
//               })
//         } else {
//           setUser({
//             email: null,
//             uid: null,
//             active: false
//           });
//         }
//       })
//     }
  
//     useEffect(() => {
//       authListener()
//       // eslint-disable-next-line
//     }, [])

//     return (
//         <UserDataContext.Provider 
//             value={{
//               user,
//               email,
//               setEmail,
//               emailError,
//               password,
//               setPassword,
//               passwordError,
//               handleLogin,
//               handleSignUp,
//               handleLogout,
//               setHasAccount,
//               hasAccount,
//               authListener
//             }}
//         >
//             {props.children}
//         </UserDataContext.Provider>
//     )
// }
 
// export default ProviderFirebase;