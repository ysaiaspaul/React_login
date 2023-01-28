import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {  getAuth } from  'firebase/auth';
import app from '../firebase';

const AuthDetails = () => {
    const auth = getAuth(app);

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user)
            }else{
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    
  return (
    <div>
        { authUser ? 
        <>
        <p>{` Signed In as ${authUser.email}`} </p>
        
        <button onClick={userSignOut}>Sign Out </button> </> : <> <p> Signed Out </p> </>}
    </div>
  )
}

export default AuthDetails