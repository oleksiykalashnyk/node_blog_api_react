import React from 'react';

import './app.scss';

import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

const App = () => {


    return (
        <div className="app">
            <Topbar/>
            <Home/>
        </div>
    );
};

export default App;