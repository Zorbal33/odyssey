import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordCheck: "",
            name: "",
            lastname: "",
            flash: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { flash, passwordCheck, ...data } = this.state;

        fetch("/auth/signup",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ flash: res.flash }),
                err => this.setState({ flash: err.flash })
            )
    }

    render() {
        return (
            <div>
                <h1>
                    email:{this.state.email} <br />
                    password:{this.state.password} <br />
                    passwordCheck:{this.state.passwordCheck} <br />
                    prénom:{this.state.name} <br />
                    nom:{this.state.lastname}<br />
                </h1>

                <input onChange={this.onChange} type="email" value={this.state.email} name="email" />
                <input onChange={this.onChange} value={this.state.password} name="password" />
                <input onChange={this.onChange} value={this.state.passwordCheck} name="passwordCheck" />
                <input onChange={this.onChange} value={this.state.name} name="name" />
                <input onChange={this.onChange} value={this.state.lastname} name="lastname" />
                <button type="submit" onClick={this.handleSubmit} ><Link to="./">submit</Link></button>
                <Link to="./SignIn">SignIn</Link>
            </div>
        );
    }
}

export default SignUp;