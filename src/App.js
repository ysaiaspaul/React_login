import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import Account1 from "./components/Account1";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import firebase from './firebase';


 //import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {

   
    const auth = getAuth(firebase);
    
    const [userName, setUserName] = useState({name: ""});
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passworError, setPasswordError] = useState('');
    
    const clearInputs = () => {
        setEmailError('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }


    const signIn = (e) => {
        
        clearErrors();
        e.preventDefault();

    signInWithEmailAndPassword(auth,email, password)
    .then((useCredential) => {
        console.log(useCredential);
    
    }).catch((error) => {
        console.log(error);
        switch(error.code){
            case "auth/invalid-email":
            case "auth/user-disable":
            case "auth/user-not-found":
                setEmailError(error.message);
                break;
            case "auth/wrong-password":
                setPasswordError(error.message);
                break;
        }
    })
  
}


useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user){
            clearInputs();
            setUser(user);
        }else{
            setUser('');
        }
    });

    return () => {
        listen();
    }
}, []);

const userSignOut = () => {
    signOut(auth).then(() => {
        console.log('You Sign out')
    }).catch(error => console.log(error))
 };
    return(
<div>
    {user ? (
        <Account1 
        userSignOut={userSignOut} 
        email={email} 
        userName={userName} 
        setUserName={setUserName} />
    ) : (
        <LoginForm 
        userName={userName} 
        setUserName={setUserName}
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        emailError={emailError}
        setEmailError={setEmailError}
        passworError={passworError}
        setPasswordError={setPasswordError}
        signIn={signIn}
       
        
        />
    )}
        
        
</div>
            // <Router>
            //     <Routes>
            //         <Route>
            //             <Route path="Account1" element={<Account1/>}  exact/>
            //         </Route>
            //         <Route  path="/" element={<LoginForm/>}  />
                    
            //     </Routes>
            // </Router>

        

        
    );

};

export default App;
