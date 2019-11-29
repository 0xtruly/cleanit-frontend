import React from 'react';
import './style.scss';
import PageHelmet from '../../homepage/components/PageHelmet';
import SignupForm from './SignupForm';

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
