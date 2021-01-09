import React from 'react';

import Input from '../../components/input/input.component';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

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
                    {/*https://css-tricks.com/use-button-element/*/}
                    {/*Use rather buttons than inputs*/}
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default SignIn;