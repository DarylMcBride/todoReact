import React, { Component } from 'react';
import '../App.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            username: '',
            password: '',
            veri: 0
        }
    }

    loadUser = () => {

        let data;
        let url = "/demo/user/username/" + this.state.username;

        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = "json";


        request.onload = () => {
            data = request.response;
            this.setState({
                userData: data
            });
            
            this.verifyUser();

        }
        request.send();
    }

    verifyUser = () => {
        let errorMessage = '';

        if (this.state.userData.password === this.state.password) {
            this.props.onVerified(this.state.userData)
        } else {
            errorMessage = "invalid username or password";
            window.alert(errorMessage)
        }
        
    }



    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        });


    }

    onChangePass = (e) => {
        this.setState({
            password: e.target.value
        });

    }

    render() {

        return (
            <div className="modal fade" id="loginForm" tabIndex="-1" role="dialog" aria-labelledby="label"
                aria-hidden="true">
                <div className="modal-dialog" role="document">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id="formContent" className="modal-body">
                            <form>
                                <input id="login" onChange={this.onChangeUserName} name="login" placeholder="email" />
                                <input type="password" id="password" onChange={this.onChangePass} placeholder="password" />


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button id="submitLogin" className="btn btn-primary" onClick={this.loadUser} data-dismiss="modal" value="Log In">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginForm;
