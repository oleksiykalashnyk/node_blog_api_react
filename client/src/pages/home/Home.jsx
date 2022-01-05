import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import "./home.scss";

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const Home = () => {
    const {search} = useLocation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios('/posts/' + search);
            setPosts(res.data)
            console.log(search)

        }
        fetchPost();
    }, [search])

    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </>
    );
};

export default Home;