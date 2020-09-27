import React, { useContext } from 'react';
import { UserDataContext } from '../context/UserDataContext'

const Login = () => {

    const {  
        // user,
        email,
        setEmail,
        emailError,
        password,
        setPassword,
        passwordError,
        handleLogin,
        handleSignUp,
        setHasAccount,
        hasAccount
    } = useContext(UserDataContext);
    
    const handleClick = () => {
        console.log(hasAccount)
        handleLogin()
    }
    return (
        <section className='login'>
            <div>
                <label>Username</label>
                <input 
                    type='text'
                    autoFocus
                    required
                    value={email} 
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <p>{emailError}</p>
                <label>Password</label>
                <input 
                    type='password'
                    autoFocus
                    required
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <p>{passwordError}</p>
                <div>
                    {hasAccount ? (
                        <>
                            <button onClick={handleClick}>Sign in</button>
                            <p>
                                Don't have an account ?{' '}
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>Sign up</button>
                            <p>
                                Have an account ?{' '}
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
   
}

export default Login;