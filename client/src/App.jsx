import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './app.scss';

import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const App = () => {

    const currentUser = true;
    return (
        <BrowserRouter>
            <TopBar user={currentUser}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Home />} />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/login"  element={currentUser ? <Home /> : <Login />}/>
                <Route path="/register"  element={currentUser ? <Home /> : <Register />}/>
                <Route path="/write"  element={currentUser ? <Write /> : <Login />}/>
                <Route path="/settings"  element={currentUser ? <Settings /> : <Login />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;