import React, {useState} from 'react';

import './app.scss';

const App = () => {
    const [ok, setOk] = useState(false);

    return (
        <div className={"container " + (ok && "active")}>
            <h1>ju</h1>
            <button onClick={() => setOk(!ok)}>Change</button>
        </div>
    );
};

export default App;