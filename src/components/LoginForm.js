import React, { useState }  from 'react';
import Account1 from "./Account1";


import { Router, Navigate, Routes } from 'react-router-dom';

const LoginForm = (props) => {

const {
    userName,
    setUserName,
    email, 
    setEmail, 
    password, 
    setPassword, 
    emailError, 
    setEmailError, 
    passworError, 
    setPasswordError, 
    signIn,
} = props;

// function handleClick(){
//     <Router>
//         <Routes>
//             <Route>
//             <Route path="Account1" element={<Account1/>}  exact/>
//             </Route>
//         </Routes>
//     </Router>
    
// }

    return (
        <div className="form-container">
            <div className="login-container">
                <h2>Welcome</h2>
                <p>Select authentication method</p>
                <form>

                    <label htmlFor="name"> Name:</label>
                    <input className="input"
                           type="text"
                           name="name"
                           id="name"
                           placeholder="Name" 
                           value={userName.name}
                           onChange={e => setUserName({...userName, name: e.target.value})}
                           />
                    <label htmlFor="email"> Email:</label>
                    <input className="input"
                           type="email"
                           name="email"
                           id="email"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                          />

                    <label htmlFor="password">Password:</label>
                    <input className="input"
                           type="password"
                           name="password"
                           id="password"
                           placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           />

                    <div className="options">
                        <div>
                            Remember me <input type="checkbox" name="remember_me" id="remember_me"/>
                        </div>
                        <div>
                            <a href="#">Forgot my password</a>
                        </div>
                    </div>

                    
                        <button type="submit" className="btn btn-login" onClick={signIn}> Sign In </button>
                       
                    <div className="providers">
                        <span>Chose another method of authentication</span>
                        <button className="btn btn-google">Google</button>
                        <button className="btn btn-facebook">Facebook</button>
                    </div>
                </form>
            </div>
            <div className="welcome-screen-container">

            </div>
        </div>
    );
};

export default LoginForm;