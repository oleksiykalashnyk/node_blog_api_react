import React from 'react';

import "./posts.scss";

import Post from "../post/Post";

const Posts = ({posts}) => {
    return (
        <div className="posts">
            {posts.map(postData => <Post key={postData._id} {...postData}/>)}
        </div>
    );
};

export default Posts;