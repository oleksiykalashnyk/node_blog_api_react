import React from 'react';
import { Link } from "react-router-dom";

import "./post.scss";

const Post = ({title, categories, createdAt, desc, photo, _id}) => {

    const publicFolder = "http://localhost:5000/images/";

    return (
        <div className="post">
            {photo ? (
                <img
                    className="postImg"
                    src={publicFolder + photo}
                    alt="card"
                />
            ) : (
                <img
                    className="postImg"
                    src="https://picsum.photos/500"
                    alt="card"
                />
            )}

            <div className="postInfo">
                <div className="postCats">

                    {categories && categories.map(category => (
                        <span className="postCat" key={category}>
                            <Link className="link" to={`/posts?cat=${category}`}>
                                {category}
                            </Link>
                        </span>
                    ))}
                </div>

                    <span className="postTitle">
                        <Link to={`/post/${_id}`} className="link">
                            {title}
                        </Link>
                    </span>
                    <hr/>
                    <span className="postDate">{new Date(createdAt).toDateString()}</span>

                <p className="postDesc">{desc}</p>

            </div>

        </div>
    );
};

export default Post;