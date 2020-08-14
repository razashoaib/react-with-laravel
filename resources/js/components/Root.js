import React, {useState} from 'react';
import Header from "./Header";
import MasterView from "./MasterView";

const Root = () => {

    const [token, setToken] = useState(window.sessionStorage.getItem('token'));

    const cb = () => {
        setToken(window.sessionStorage.getItem('token'));
    }

    return (
        <div>
            <Header token={token} cb={() => cb()}/>
            <MasterView cb={() => cb()} />
        </div>
    );
}

export default Root;
