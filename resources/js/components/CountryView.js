import React, {useEffect, useContext} from 'react';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Countries from "./Countries";

const CountryView = (props) => {
    useEffect( () => {
        if(!window.sessionStorage.getItem('token')) {
            window.sessionStorage.setItem('msg', 'Please sign in first!')
            props.history.push('/login');
        }
        props.cb();
    }, []);

    let cardStyle = {
        width: '500px',
        marginLeft: 'auto',
        marginRight: 'auto'
    };
    return (
        <div className="container">
            <div className="row justify-content-center" style={{ marginTop: '5px' }}>
                <div className="col-md-8">
                    <div style={cardStyle} className="card">
                        <div className="card-header">Calling Secured Rest API in React</div>
                        <div className="card-body">Countries</div>
                        <Countries />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(CountryView);
