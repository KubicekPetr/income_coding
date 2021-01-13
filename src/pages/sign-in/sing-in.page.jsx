import React from 'react';

import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import Warning from '../../components/warning/warning.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            warning: {
                active: false,
                message: '',
            },
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch(e) {
            console.error(e);
            e.code === 'auth/user-not-found' ?
            this.setState({
                warning: {
                    active: true,
                    message: 'The password is invalid or the user does not have a password.',
                },
            }) :
            this.setState({
                warning: {
                    active: true,
                    message: e.message,
                },
            });
        }

        // clear inputs after submit
        this.setState({
            email: '',
            password: '',
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
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        handleChange={this.handleChange}
                        label="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        required />
                    <Input
                        handleChange={this.handleChange}
                        label="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        required />
                    <Button>Sign in</Button>
                    {
                        this.state.warning.active && <Warning message={this.state.warning.message} />
                    }
                    <p>or</p>
                    <Button
                        onClick={signInWithGoogle}
                        type="button"
                    >Sign In with Google</Button>
                </form>
            </div>
        );
    }
}

export default SignIn;