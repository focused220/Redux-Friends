import React, {Component} from 'react';
import {login} from '../actions/index';
import { connect } from 'react-redux';

class LoginPage extends Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = e =>{
        this.setState({
            credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
            }
          });
    }

    handleLogin = e =>{
        e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/friends"));
    }


    render(){
        return(
            <>
            <div className='login'>
                <form onSubmit={this.handleLogin}>
                    <input type='text' name='username' id='username' onChange={this.handleChanges} />
                    <input type='password' name='password' id='password' onChange={this.handleChanges}/>
                    <button type='submit' name='login' id='login'>Log In</button>
                </form>
            </div>
            </>
        )
    }

}

const mapStateToProps = state =>{
    return{
        isLoggingIn: state.isLoggingIn
    };
};

export default connect(
    mapStateToProps,
    {login}
)(LoginPage);
