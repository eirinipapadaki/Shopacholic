import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const login = (event) => {
        event.preventDefault();//this stops refresh
        //do the login logic..
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect to homepage
            history.push('/');
        })
        .catch((e) => alert(e.message));
    };
    const register = (event) => {
        event.preventDefault();//this stops refresh
        //do the register logic..
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and logged in, redirect homepage
            history.push('/');
        })
        .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={require('./Shopacholic-logo.png')}
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Shopacholic's Conditions of Use and Sale.
                    Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Shopacholic Account</button>
            </div>

        </div>
    );
}

export default Login;
