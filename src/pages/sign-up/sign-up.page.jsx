import React from 'react';

import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import Warning from '../../components/warning/warning.component';

import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            warning: {
                active: false,
                message: '',
            },
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            this.setState({
                warning: {
                    active: true,
                    message: "Passwords didn't match.",
                },
                password: '',
                confirmPassword: '',
            });
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
        } catch (e) {
            console.error(e);
            this.setState({
                warning: {
                    active: true,
                    message: e.message,
                },
            });
        }

        // clear form after submit
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        handleChange={this.handleChange}
                        label="Display Name"
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        required />
                    <Input
                        handleChange={this.handleChange}
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        required />
                    <Input
                        handleChange={this.handleChange}
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        required />
                    <Input
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        required />
                    <Button>Sign up</Button>
                    {
                        this.state.warning.active && <Warning message={this.state.warning.message} />
                    }
                    <p>or</p>
                    <Button
                        onClick={signInWithGoogle}
                        type="button"
                    >Sign Up with Google</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;