import React, { PureComponent } from 'react';
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
        const response = await axios.request({
            url: `http://192.168.64.2:8081/api/countries?query=${query}`,
            method: 'GET'
        });
        this.setState({
            countries: response.data
        });
    };


    render() {
        const { countries } = this.state;
        const myStyle = {
            margin: '5px'
        };
        return(
            <div>
                <input onChange={(val) => this.handleInputChange(val)} className='form-control' />
                <button style={myStyle} type="button" onClick={() => this.handleSearchBtnClick()} className="btn btn-primary" >Search</button>
                <ul>
                    {countries.map( (val) => {
                        return (<li key={val}>{val}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default Countries;
