import React from 'react';

import "./posts.scss";

import Post from "../post/Post";

const defaultData = [
    {
        image: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        image: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        image: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        image: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
];



const Posts = () => {
    return (
        <div className="posts">
            {defaultData.map(data => <Post {...data}/>)}
        </div>
    );
};

export default Posts;