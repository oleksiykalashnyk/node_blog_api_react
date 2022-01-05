import React, {useContext, useState} from 'react';
import axios from "axios";

import "./write.scss";

import {Context} from "../../contex/Contex";

const Write = () => {

    const {user} = useContext(Context);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title
        }
        const res = await axios.post
    }

    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form
                className="writeForm"
                onSubmit={handleSubmit}
            >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{display: "none"}}/>
                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                      <textarea
                          className="writeInput writeText"
                          placeholder="Tell your story..."
                          type="text"
                          autoFocus={true}
                      />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default Write;