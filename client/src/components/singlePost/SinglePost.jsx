import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";

import "./singlePost.scss";
import axios from "axios";

const SinglePost = () => {

    const location = useLocation();
    const patch = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${patch}`);
            setPost(res.data);
        }
        getPost();
    }, [patch]);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo ? (
                    <img
                        src={post.photo}
                        alt="post"
                        className="singlePostImage"
                    />
                ) : (
                    <img
                        src="https://picsum.photos/500"
                        alt="post"
                        className="singlePostImage"
                    />
                )}

                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                      Author:
                    <b className="singlePostAuthor">
                        <Link className="link" to={`/posts?user=${post.username}`}>
                            {post.username}
                        </Link>
                    </b>
                  </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;