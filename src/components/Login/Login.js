import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext'
import './Login.css';
import eywhite from '../../Images/eywhite.png'
import logowup3 from '../../Images/logowup3.png'
import hombre from '../../Images/hombre.png'
import correo from '../../Images/correo.png'
import seguridad from '../../Images/seguridad.png'

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

        <section className='containerLeft'>

<div className='loginlogos'>

        <span className='logoleft'>
        <img src={eywhite} alt="EY" width="140px"/> 
        </span>

        <span className='logowupleft'>
        <img src={logowup3} alt="WorkUp" width="00px"/>
        </span>

        </div>

     </section>


        <section className='containerLogin'>
    
            <span className='logologin'>
            <img src={eywhite} alt="EY" width="100px"/> 
            </span>

            <div className='containerInputs'>
            <span className='welcome'> 
                <h1>BIENVENIDO!</h1>
                </span>

            <span className='inputimg'> 
            <img src={hombre} alt='User' width="32px"/>
                 <input className='input' type='text' autoFocus required
                 placeholder='Javier Madrid'
                value={email} 
                onChange={ (e) => setEmail(e.target.value) } />
                 <p>{emailError}</p>
</span>

<span className='inputimg'> 
            <img src={correo} alt='Correo' width="30px"/>
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
                </span>
                
                  <span className='inputimg'> 
            <img src={seguridad} alt='Seguridad' width="20px"/>       
                <input 
                 className='input'
                    type='password'
                    autoFocus
                    required
                    value={password}
                    placeholder='********'
                    onChange={ (e) => setPassword(e.target.value) }
                /></span>

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

            <span className='logowuplogin'> 
            <img src={logowup3} alt="WorkUp" width="300px"/>
            </span>

        </section>

        </div>

    );
}

export default Login;