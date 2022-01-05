import React, {useContext} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './app.scss';

import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import {Context} from "./contex/Contex";

const App = () => {

    const {user} = useContext(Context);

    return (
        <BrowserRouter>
            <TopBar user={user}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Home/>}/>
                <Route path="/post/:id" element={<Single/>}/>
                <Route path="/login" element={user ? <Home/> : <Login/>}/>
                <Route path="/register" element={user ? <Home/> : <Register/>}/>
                <Route path="/write" element={user ? <Write/> : <Login/>}/>
                <Route path="/settings" element={user ? <Settings/> : <Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;