import React, {useEffect, useState} from 'react';

import "./sidebar.scss";
import axios from "axios";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getAllCategories = async () => {
            const res = await axios.get('/categories')
            setCategories(res.data);
        }
        getAllCategories();
    }, [])

    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto deleniti laudantium mollitia
                    quo. Architecto assumenda, dolore eveniet impedit incidunt minima obcaecati perferendis
                    perspiciatis, praesentium quas quis quos rem suscipit!</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <Link  to={`/posts/`}>
                        <li  className="sidebarListItem">All</li>
                    </Link>
                    {categories.map(cat => (
                        <Link key={cat._id} to={`/posts?cat=${cat.name}`}>
                            <li  className="sidebarListItem">{cat.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;