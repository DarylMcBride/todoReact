import React, { Component } from 'react';
import '../App.css';

class CreateAccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            cPass: '',
            phone: '',
            fName: '',
            lName: '',
            email: '',
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

    onChangeCPass = (e) => {
        this.setState({
            cPass: e.target.value
        });


    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });

    }

    onSubmit = () => {
        if (this.state.password === this.state.cPass) {

            let body = {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                phone: "default",
                fName: "default",
                lName: "default"

            }



            let url = "/demo/user";
            let postRequest = new XMLHttpRequest();
            postRequest.open('POST', url);

            let final = JSON.stringify(body);
            postRequest.setRequestHeader('Content-type', 'application/json');
            console.log(final)
            postRequest.onload = () => {
                window.alert("account successfully created")
            }
            postRequest.send(final);
        } else {
            
            window.alert("both passwords must match");
        }

    }

    render() {

        return (
            <div className="modal fade" id="CreateAccountForm" tabIndex="-1" role="dialog" aria-labelledby="label"
                aria-hidden="true">
                <div className="modal-dialog" role="document">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id="formContent" className="modal-body">
                            <form>
                                <input id="login1" onChange={this.onChangeUserName} name="login" placeholder="Username" required />
                                <input type="password" id="password1" onChange={this.onChangePass} placeholder="Password" required />
                                <input type="password" id="password2" onChange={this.onChangeCPass} placeholder="Confirm Password" required />
                                <input  type="email" id="login2" onChange={this.onChangeEmail} name="login" placeholder="Email" />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button id="submitLogin" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal" value="Log In">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateAccountForm;
