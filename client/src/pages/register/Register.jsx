import {useState} from "react";
import {useNavigate} from "react-router-dom";

import "./register.scss"
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username, password, email
            });
            res.data && navigate("/login");
        } catch (e) {
            setError(true);
        }

        setPassword("");
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form
                className="registerForm"
                onSubmit={handleSubmit}
            >

                <label>Username</label>
                <input
                    className="registerInput"
                    type="text"
                    value={username}
                    placeholder="Enter your username..."
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Email</label>
                <input
                    className="registerInput"
                    type="text"
                    value={email}
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}

                />

                <label>Password</label>
                <input
                    className="registerInput"
                    type="password"
                    value={password}
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}

                />

                <button
                    className="registerButton"
                    type='submit'
                >Register
                </button>

            </form>
            <button
                className="registerLoginButton"
                onClick={() => navigate('/login')}
            >
                Login
            </button>

            {error && <span style={{color: "red", margin: "20px 0"}}>Something went wrong!</span>}
        </div>
    );
};

export default Register;


