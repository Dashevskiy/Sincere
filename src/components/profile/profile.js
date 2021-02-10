import React from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import './profile.css';
import img from './image.jpg'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        const userName = localStorage.getItem('userName');
        const userPassword = localStorage.getItem('userPassword');

        this.state = {
            userName: userName,
            userPassword: userPassword
        };

        if (this.state.userName && this.state.userPassword) {
             this.props.actionIsLoggedIn()
        }
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className='profile'>
                    <h1>Профиль</h1>
                    <div>
                        <img src={img} alt='Avatar'/>

                        <h1>Admin</h1>
                        <span>Age: 22</span>
                        <span>Gender: female</span>
                        <span>Email: email@gmail.com</span>
                        <span>Phone: +380123456789</span>
                    </div>
                </div>
            )
        }
        return <Redirect to='/login'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);