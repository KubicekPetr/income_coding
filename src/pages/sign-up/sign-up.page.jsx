import React, { useState } from 'react';

import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import Warning from '../../components/warning/warning.component';

import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';

const SignUp = () => {
    const [userCredetnials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [warning, setWarning] = useState({
        active: false,
        message: '',
    })

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = userCredetnials;

        if (password !== confirmPassword) {
            setUserCredentials({
                ...userCredetnials,
                password: '',
                confirmPassword: '',
            });
            setWarning({
                active: true,
                message: "Passwords didn't match.",
            });
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
        } catch (e) {
            console.error(e);
            setWarning({
                active: true,
                message: e.message,
            });
        }

        // clear form after submit
        setUserCredentials({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({
            ...userCredetnials,
            [name]: value,
        });
    }

    return (
        <div>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <Input
                    handleChange={handleChange}
                    label="Display Name"
                    name="displayName"
                    type="text"
                    value={userCredetnials.displayName}
                    required />
                <Input
                    handleChange={handleChange}
                    label="Email"
                    name="email"
                    type="email"
                    value={userCredetnials.email}
                    required />
                <Input
                    handleChange={handleChange}
                    label="Password"
                    name="password"
                    type="password"
                    value={userCredetnials.password}
                    required />
                <Input
                    handleChange={handleChange}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={userCredetnials.confirmPassword}
                    required />
                <Button>Sign up</Button>
                {
                    warning.active && <Warning message={warning.message} />
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

export default SignUp;