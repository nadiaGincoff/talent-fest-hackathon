import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext'
import './Login.css';

const Login = () => {

    const {  
        user,
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
        console.log(user)
        console.log(hasAccount)
        handleLogin()
    }

    return (

<div className='login'>

        <div className='containerLeft'>
        <span className='logoleft'><h1>EY</h1></span>
     </div>


        <section className='containerLogin'>
        <span className='logologin'><h1>EY</h1></span>

            <div className='containerInputs'>
                <h1>BIENVENIDO!</h1>
                <input 
                    className='input'
                    type='text'
                    autoFocus
                    required
                    placeholder='Javier Madrid'
                    value={email} 
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <p>{emailError}</p>
                <input 
                 className='input'
                    type='text'
                    autoFocus
                    required
                    placeholder='javier.madrid@ey.com'
                    value={email} 
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <p>{emailError}</p>        
                <input 
                 className='input'
                    type='password'
                    autoFocus
                    required
                    value={password}
                    placeholder='********'
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

        </div>

    );
}

export default Login;