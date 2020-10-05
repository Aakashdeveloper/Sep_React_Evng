import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import UserList from './UserlIst';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import ProfileComponent from './Profile';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <Route path="/profile" component={ProfileComponent}></Route>
                <Route path="/list" component={UserList}></Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing;