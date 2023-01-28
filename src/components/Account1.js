import React from 'react';
import Reno from "./Reno";
import firebase from "firebase/compat/app";


const Account1 = (props) => {

    const {
        userName,
        userSignOut
    } = props;

        return (
            <div className="container">
                <div className="welcome-screen-container">
                    <Reno/>
                </div>
            <div className="welcome">
                <h2>Welcome, <span>{userName.name}</span></h2> <br/>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur sem. 
                Aliquam id tempor diam, et lobortis purus. Donec eu libero consequat purus convallis
                 ornare vitae et mauris. Nam eu sagittis ante. Vivamus suscipit turpis sed dolor 
                 vulputate auctor. Vestibulum sodales ac nunc sit amet ullamcorper. Ut sodales, 
                 quam vel sollicitudin ullamcorper, dui turpis cursus diam, eget cursus tellus nunc et diam.

                </p>
                <button className="btn btn-logout" onClick={userSignOut}>Logout</button>


            </div>

            </div>
        );
}

export default Account1;