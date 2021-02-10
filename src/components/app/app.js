import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../reducers/index';
import './app.css'
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import Login from "../login/login";
import News from "../news/news";
import Profile from "../profile/profile";

export default class App extends Component {

    render() {
        const store = createStore(reducer);

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className='app__container'>
                        <Header/>
                        <Route path='/' exact component={Main}/>
                        <Route path='/news' exact component={News}/>

                        <Route path='/login' exact render={() => (
                            <Login/>
                        )}/>

                        <Route path='/profile' exact render={() => (
                            <Profile/>
                        )}/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}