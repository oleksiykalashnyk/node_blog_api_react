import React from 'react';
// import { Link } from "react-router-dom";

import "./post.scss";

const Post = ({image}) => {
    return (
        <div className="post">

            <img
                className="postImg"
                src={image}
                alt=""
            />

            <div className="postInfo">

                <div className="postCats">
                    <span className="postCat">
                        <a className="link" href="/posts?cat=Music">
                            Music
                        </a>
                    </span>

                    <span className="postCat">
                        <a className="link" href="/posts?cat=Music">
                            Life
                        </a>
                    </span>

                    <span className="postTitle">
                        <a href="/post/abc" className="link">
                            Lorem ipsum dolor sit amet
                        </a>
                    </span>

                    <hr/>

                    <span className="postDate">1 hour ago</span>

                </div>

                <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                    atque, exercitationem quibusdam, reiciendis odio laboriosam?
                </p>

            </div>

        </div>
    );
};

export default Post;