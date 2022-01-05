import "./login.scss";

import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your email..."/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..."/>
                <button className="loginButton">Login</button>
            </form>
            <button
                className="loginRegisterButton"
                onClick={() => navigate('/register')}
            >
                Register
            </button>
        </div>
    );
};

export default Login;
