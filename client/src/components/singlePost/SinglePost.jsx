import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import "./singlePost.scss";
import axios from "axios";

import {Context} from "../../contex/Contex";

const SinglePost = () => {

    const publicFolder = "http://localhost:5000/images/";

    const {user} = useContext(Context);

    const location = useLocation();

    const patch = location.pathname.split("/")[2];

    const [post, setPost] = useState({});

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${patch}`);
            console.log(res.data)
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    }, [patch, updateMode]);


    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: {
                    username: user.username
                }
            });
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false)
        } catch (err) {
        }
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo ? (
                    <img
                        src={publicFolder + post.photo}
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
                {updateMode
                    ?
                    (<input
                        type="text"
                        className="singlePostTitle"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        autoFocus
                    />)
                    :
                    (
                        <h1 className="singlePostTitle">
                            {post.title}
                            {user?.username === post.username && (
                                <div className="singlePostEdit">
                                    <i
                                        className="singlePostIcon far fa-edit"
                                        onClick={() => setUpdateMode(!updateMode)}
                                    />
                                    <i
                                        className="singlePostIcon far fa-trash-alt"
                                        onClick={handleDelete}
                                    />
                                </div>
                            )}
                        </h1>
                    )}
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
                {updateMode
                    ?
                    (<textarea
                        className="singlePostDesc"
                        cols="20"
                        rows="6"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />)
                    :
                    (<p className="singlePostDesc">
                        {post.desc}
                    </p>)
                }

                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
};

export default SinglePost;