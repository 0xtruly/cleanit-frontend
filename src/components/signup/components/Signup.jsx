import React from 'react';
import SignupForm from './SignupForm';
import './style.scss';

class Signup extends React.PureComponent {
    render() {
        return (
            <div className="container">
                <SignupForm />
            </div>
        );
    }
}

export default Signup;
