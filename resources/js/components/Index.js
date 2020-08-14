import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import Root from "./Root";

const Index = () => {
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
