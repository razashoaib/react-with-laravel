import React, { useEffect, useState} from 'react';
import axios from "axios";

const Register = () => {

    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect( () => {
        if(window.sessionStorage.getItem('token')) {
            props.history.push('/');
        }
    }, []);

    const postRegister = async(event) => {
        event.preventDefault();
        setError('');
        setMsg('');
        let data = {
            name: name,
            email: email,
            password: password,
            c_password: password
        };
        try {
            const response = await axios.request({
                url: 'http://localhost:8081/api/register',
                method: 'POST',
                data: data
            });

            if (response.data.success) {
                setMsg('Registered!');
            } else {
                setError('Error');
            }
        } catch (e) {
            setError('Error');
        }
    }

    const formStyle = {
        marginTop: '25px'
    };

    const inputStyle = {
        marginBottom: '5px'
    };

    return (
        <div className="container h-100 register-container">
            {msg !== '' && <Success />}
            {error !== '' && <Error />}

            <div className="row h-100 justify-content-center align-items-center">
                <form style={formStyle} onSubmit={ (event) => postRegister(event)} method="POST" className="form-signin col-4">
                    <h1 className="h3 mb-3 font-weight-normal">Register a new user</h1>
                    <label htmlFor="inputName" className="sr-only">Name</label>
                    <input style={inputStyle} onChange={(e) => setName(e.target.value)} name="name" type="text" id="inputName" className="form-control" placeholder="Name" required autoFocus />
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input style={inputStyle} onChange={(e) => setEmail(e.target.value)} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input style={inputStyle} onChange={(e) => setPassword(e.target.value)} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

const Success = () => (
    <div style={{ marginTop: '10px' }} className="alert alert-success" role="alert">
        <strong>Well done!</strong> You have successfully registered. Please login now.
    </div>
);

const Error = () => (
    <div style={{ marginTop: '10px' }} className="alert alert-danger" role="alert">
        Something went wrong while registering.
    </div>
);

export default Register;
