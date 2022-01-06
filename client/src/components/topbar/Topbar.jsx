import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./topbar.scss";
import {Context} from "../../contex/Contex";

const TopBar = () => {

    const PF = "http://localhost:5000/images/"

    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            About
                        </Link>
                    </li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            Write
                        </Link>
                    </li>
                    {user && <li className="topListItem" onClick={handleLogout}>LogOut</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src={PF+user.profilePic}
                            alt="avatar"
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default TopBar;