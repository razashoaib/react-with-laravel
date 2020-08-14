import React, { PureComponent } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Countries extends PureComponent {

    state = {
        countries: [],
        query: ''
    };

    handleInputChange = (val) => {
        this.setState({
            query: val.target.value
        });
    };

    handleSearchBtnClick = async () => {
        const { query } = this.state;
        try {
            const response = await axios.request({
                url: `http://localhost:8081/api/countries?query=${query}`,
                method: 'GET',
                headers: {
                    'Authorization': window.sessionStorage.getItem('token')
                }
            });
            this.setState({
                countries: response.data
            });
        } catch (e) {
            window.sessionStorage.clear();
            this.props.history.push('/login');
        }
    };

    render() {
        const { countries } = this.state;
        const buttonStyle = {
            display: 'inline-block',
            marginLeft: '5px',
            marginTop: '-3px'
        };
        const inputStyle = {
            display: 'inline-block',
            marginLeft: '5px',
            width: '405px'
        };
        return(
            <div>
                <input style={inputStyle} onChange={(val) => this.handleInputChange(val)} className='form-control' />
                <button style={buttonStyle} type="button" onClick={() => this.handleSearchBtnClick()} className="btn btn-primary" >Search</button>
                <ul>
                    {countries.map( (val) => {
                        return (<li key={val}>{val}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default withRouter(Countries);
