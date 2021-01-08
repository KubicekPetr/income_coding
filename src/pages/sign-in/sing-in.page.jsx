import React from 'react';

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
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
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