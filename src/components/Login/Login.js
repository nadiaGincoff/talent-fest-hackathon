import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext'
import './Login.css';
import Ey from '../../Images/Ey.jpg'
import userimg from '../../Images/userimg.png'

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
    

        <span className='logologin'>
            <img src={Ey} alt="EY" width="100px"/> 
            </span>




            <div className='containerInputs'>
                <h1>BIENVENIDO!</h1>


            <span className='inputimg'> 
            <img src={userimg} alt='hola' width="30px"/>
                 <input className='input' type='text' autoFocus required
                 placeholder='Javier Madrid'
                value={email} 
                onChange={ (e) => setEmail(e.target.value) } />
                 <p>{emailError}</p>
  
{/* 
   <img src={user} alt="User" width="100px"/>  */}
</span>

<span className='inputimg'> 
            <img src={userimg} alt='hola' width="30px"/>
                <input 
                 className='input'
                    type='text'
                    autoFocus
                    required
                    placeholder='javier.madrid@ey.com'
                    value={email} 
                    onChange={ (e) => setEmail(e.target.value) }
                    src={user} alt="User" width="100px"
                />
                <p>{emailError}</p> 
                </span>
                
                  <span className='inputimg'> 
            <img src={userimg} alt='hola' width="30px"/>       
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

        </section>

        </div>

    );
}

export default Login;