import React from 'react';
import { Card } from 'antd';
import { FormCard } from './FormCard';
import { STRINGS } from '../constants';
import { SocialCard } from './SocialCard';

const { JOIN, WELCOME } = STRINGS;

/** This is the main component
 * for the form
*/

const SignupForm = () => (
    <div className="formContainer" data-test="formContainer">
        <Card className="formCard">
            <h3>{WELCOME}</h3>
            <p>{JOIN}</p>
            <FormCard />
        </Card>
        <SocialCard />
    </div>
);
export default SignupForm;
