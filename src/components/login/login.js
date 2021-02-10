import React from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import './login.css';

class Login extends React.Component {

    state = {
        userName: '',
        userPassword: ''
    }
    onChangeUserName = (e) => {
        const name = e.target.value;
        if (name === 'Admin') {
            this.setState({
                userName: name
            })
        }
    }
    onChangeUserPassword = (e) => {
        const password = e.target.value;
        if (password === '12345') {
            this.setState({
                userPassword: password
            })
        }
    }

    submitUserData = () => {
        const {userName, userPassword} = this.state;
        localStorage.setItem('userName', userName);
        localStorage.setItem('userPassword', userPassword);
        if (this.state.userName.length > 0 && this.state.userPassword.length > 0) {
            return this.props.actionIsLoggedIn(this.state)
        }
    }

    render() {

        if (this.props.isLoggedIn) {
            return <Redirect to='/profile'/>
        }

        return (
            <div className='login'>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Логин</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               placeholder="Введите email" onChange={this.onChangeUserName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Введите пароль" onChange={this.onChangeUserPassword}/>
                    </div>
                    <button type='submit' className="btn login__btn" onClick={this.submitUserData}>Войти</button>
                </form>
            </div>
        )

    }
}

const mapStateToProps = ({isLoggedIn}) => {
    return {isLoggedIn}
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionIsLoggedIn: () => dispatch({type: 'LOGGED'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);