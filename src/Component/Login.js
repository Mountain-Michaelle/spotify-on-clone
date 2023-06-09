import React from 'react';
import '../css/Login.css';
import { loginUrl } from './spotify';


const Login = () => {
    return(
        <div className='login'>
            {/* Login Logo */}
           <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

            {/* Login with Spotify button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;