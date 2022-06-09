import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
        <div className="main">
            <div className="conatiner-fluid">
                <img  className="image"src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="login" />
            </div>
            <div className="right-container">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 128 128" width="150px" height="150px"><path fill="#fff" d="M44 34A30 30 0 1 0 44 94A30 30 0 1 0 44 34Z"/><path fill="#71c2ff" d="M84 34A30 30 0 1 0 84 94A30 30 0 1 0 84 34Z"/><path fill="#fff" d="M54,64c0,8.9,3.9,16.9,10,22.4c6.1-5.5,10-13.5,10-22.4s-3.9-16.9-10-22.4C57.9,47.1,54,55.1,54,64z"/><path fill="#444b54" d="M25 90.2c-.7 0-1.3-.2-1.9-.7C15.4 83.2 11 73.9 11 64c0-18.2 14.8-33 33-33 2.1 0 4.1.2 6.1.6 1.6.3 2.7 1.9 2.4 3.5-.3 1.6-1.9 2.7-3.5 2.4-1.6-.3-3.3-.5-5-.5-14.9 0-27 12.1-27 27 0 8.1 3.6 15.7 9.9 20.9 1.3 1.1 1.5 2.9.4 4.2C26.7 89.8 25.9 90.2 25 90.2zM84 97c-1.7 0-3-1.3-3-3s1.3-3 3-3c14.9 0 27-12.1 27-27S98.9 37 84 37c-1.7 0-3-1.3-3-3s1.3-3 3-3c18.2 0 33 14.8 33 33S102.2 97 84 97zM66.2 84.4c-.1-.1-.1-.2-.2-.2C60.3 79 57 71.7 57 64c0-7.7 3.3-15 9-20.1 1.2-1.1 1.3-3 .2-4.2s-3-1.3-4.2-.2C55 45.7 51 54.6 51 64c0 8.2 3.1 16.1 8.5 22.1-2.6 1.8-5.4 3.1-8.4 4-1.6.4-2.5 2.1-2.1 3.7.4 1.3 1.6 2.2 2.9 2.2.3 0 .5 0 .8-.1 4.9-1.3 9.5-3.8 13.4-7.3l0 0c.1-.1.2-.1.2-.2C67.3 87.2 67.2 85.5 66.2 84.4 66.2 84.4 66.2 84.4 66.2 84.4z"/></svg> 
                <h1>Welcome to Photo Sharing App</h1>
                <Link to="/homepage"><button type="button" className="btn btn-primary my-4">Enter</button></Link>
            </div>
        </div>
        </>
    )
}
export default Login;