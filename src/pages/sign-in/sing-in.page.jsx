import React, { useState } from 'react';

import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import Warning from '../../components/warning/warning.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const [warning, setWarning] = useState({ active: false, message: '' });

    const { email, password } = userCredentials;
    const { active, message } = warning;
    
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (e) {
            console.error(e);
            e.code === 'auth/user-not-found' ?
                setWarning({
                    warning: {
                        active: true,
                        message: 'The password is invalid or the user does not have a password.',
                    },
                }) :
                setWarning({
                    warning: {
                        active: true,
                        message: e.message,
                    },
                });
        }

        // clear inputs after submit
        setUserCredentials({
            email: '',
            password: '',
        });
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    }

    return (
        <div>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <Input
                    handleChange={handleChange}
                    label="email"
                    name="email"
                    type="email"
                    value={email}
                    required />
                <Input
                    handleChange={handleChange}
                    label="password"
                    name="password"
                    type="password"
                    value={password}
                    required />
                <Button>Sign in</Button>
                {
                    active && <Warning message={message} />
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

export default SignIn;