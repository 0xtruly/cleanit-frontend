import React from 'react';
import SignupForm from './SignupForm';
import PageHelmet from '../../homepage/components/PageHelmet';
import './style.scss';

/** This is the main component
 * for the user signup
 * page
 */
const Signup = () => (
    <div className="container">
        <PageHelmet />
        <SignupForm />
    </div>
);

export default Signup;
