import React, {useEffect, useState} from 'react';
import axios from "axios";

const Login = (props) => {

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect( () => {
        if(window.sessionStorage.getItem('token')) {
            props.history.push('/');
        }
    }, []);

    const postLogin = async(event) => {
        event.preventDefault();

        let data = {
            email: email,
            password: password,
        };
        try {
            const response = await axios.request({
                url: 'http://localhost:8081/api/login',
                method: 'POST',
                data: data
            });

            if (response.data.success) {
                window.sessionStorage.setItem('token', `Bearer ${response.data.success.token}`);
                props.history.push('/');
            } else {
                window.sessionStorage.clear();
                setError('Error');
            }
        } catch (e) {
            window.sessionStorage.clear();
            setError('Error');
        }
    }

    let formStyle = {
        marginTop: '25px'
    };

    let inputStyle = {
        marginBottom: '5px'
    };
    return (
        <div className="container h-100 register-container">
            {window.sessionStorage.getItem('msg') && <Child />}
            {error !== '' && <Error />}

            <div className="container h-100 login-container">
                <div className="row h-100 justify-content-center align-items-center">
                    <form style={formStyle} method="POST" onSubmit={(e) => postLogin(e)} className="form-signin col-4">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input style={inputStyle} type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input style={inputStyle} type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
const Child = () => (
    <div style={{ marginTop: '10px' }} className="alert alert-warning" role="alert">
        Please <strong>sign in</strong> first!
    </div>
);

const Error = () => (
    <div style={{ marginTop: '10px' }} className="alert alert-danger" role="alert">
        Something went wrong while logging in.
    </div>
);

export default Login;
