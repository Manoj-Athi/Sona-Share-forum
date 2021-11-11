import React,{ useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie'

import './Auth.css'
import loginImage from '../../assets/login-illustrator.svg'
import signupImage from '../../assets/signup-illustrator.svg'

const Auth = () => {

    const { id } = useParams()
    const history = useHistory()

    const cookies = new Cookies()
    const initialValues = { 
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        // avatarURL: '',
    }
    const [ authData, setAuthData ] = useState(initialValues)

    const handleChange = (e) =>{
        setAuthData({ ...authData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { username, password, phoneNumber } = authData;
        const URL = 'http://localhost:5000/auth';

        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${ id ==='signup' ? 'signup' : 'login'}`, {
            username, password, fullName: authData.fullName, phoneNumber, 
        });
        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(id === 'signup') {
            cookies.set('phoneNumber', phoneNumber);
            // cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }
        history.push('/')
        window.location.reload()
    }

    return (
        <section className='auth-page'>
            {
                id === "login" && (
                    <div>
                        <img className='auth-image' src={loginImage} alt="login" />
                    </div>
                )
            }
            <div className="auth-container">
                <form className='auth-form' onSubmit={handleSubmit}>
                <h1 className='auth-form-title'>{ id==='signup' ? 'Signup' : 'Login' }</h1>
                    { id === 'signup' && (
                        <label htmlFor="">
                            <h3>Full name</h3>
                            <input type="text" className='form-input' name='fullName' placeholder='Enter Full Name' onChange={handleChange}/>
                        </label>
                    )}
                    <label htmlFor="">
                            <h3>Username</h3>
                            <input type="text" className='form-input' name="username" placeholder='Enter Username' onChange={handleChange}/>
                    </label>
                    { id === 'signup' && (
                        <label htmlFor="">
                            <h3>Phone Number</h3>
                            <input type="text" className='form-input' name='phoneNumber' placeholder='Enter Phone Number' onChange={handleChange}/>
                        </label>
                    )}
                    {/* { id === 'signup' && (
                        <label htmlFor="">
                            <h3>Avatar URL</h3>
                            <input type="text" className='form-input' name='avatarURL' onChange={handleChange}/>
                        </label>
                    )} */}
                    <label htmlFor="">
                        <h3>Password</h3>
                        <input type="password" className='form-input' name='password' placeholder='Enter Password' onChange={handleChange}/>
                    </label>
                    { id === 'signup' && (
                        <label htmlFor="">
                            <h3>Confirm Password</h3>
                            <input type="password" className='form-input' name='confirmPassword' placeholder='Re-Enter Password' onChange={handleChange}/>
                        </label>
                    )}
                    <input type="submit" className='auth-submit-btn' value={ id === 'signup' ? 'Signup': 'Log in' }/>
                </form>
                <p>{ id === 'signup' ? "Already have an account? " : "Don't have an account? " }
                    <Link to={id === 'signup' ? '/Auth/login' : '/Auth/signup'} className="switch-auth-btn">{id === 'signup' ? 'Log in' : 'Signup'}</Link> 
                </p>
            </div>
            {
                id === "signup" && (
                    <div>
                        <img className='auth-image' src={signupImage} alt="login" />
                    </div>
                )
            }
        </section>
    )
}

export default Auth
