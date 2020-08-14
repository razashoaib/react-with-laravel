import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CountryView from "./CountryView";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const MasterView = ({cb}) => {
    return (
        <main>
            <Switch>
                <Route exact path='/' render={() => (<CountryView cb={cb}/>)}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </Switch>
        </main>
    );
}

export default MasterView;
