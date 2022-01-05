import "./register.scss"

import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your username..."/>
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..."/>
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..."/>
                <button className="registerButton">Register</button>
            </form>
            <button
                className="registerLoginButton"
                onClick={() => navigate('/login')}
            >
                Login
            </button>
        </div>
    );
};

export default Register;


