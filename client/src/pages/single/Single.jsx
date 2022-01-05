import React from 'react';
import { useParams } from "react-router-dom";

import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

const Single = () => {
    let params = useParams();
    const {id} = params;
    return (
        <div className="single">
            <SinglePost id={id}/>
            <Sidebar/>
        </div>
    );
};

export default Single;