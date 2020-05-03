import React from 'react';
import {PureComponent} from 'react';

class Name extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <input onChange={ (e) => this.handleInputChange(e) } />
                <p>Hello {this.state.name}</p>
            </div>
        );
    }
}

export default Name;
