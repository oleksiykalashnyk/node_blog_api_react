import {useContext, useRef} from "react";
import {useNavigate} from "react-router-dom";

import "./login.scss";
import {Context} from "../../contex/Contex";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const {dispatch, isFetching} = useContext(Context);

    const userRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value.trim(),
                password: passwordRef.current.value.trim()
            })
            res && dispatch({type: "LOGIN_SUCCESS", payload: res.data});

        } catch (err) {
            dispatch({type: "LOGIN_FAILURE"});
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button
                    className="loginButton"
                    type="submit"
                    disabled={isFetching}

                >
                    Login
                </button>
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
