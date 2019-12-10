import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Title from 'antd/lib/typography/Title';
import { LOGIN_STRINGS } from '../constants';
import SigninForm from './Form';

const {
    LOGIN_TITLE,
    LOGIN_TITLE_SUBTEXT,
    SIGN_UP_TEXT,
    SIGN_UP_LINK_TEXT,
    SIGN_UP_URL,
    VENDOR_SIGN_IN_LINK_TEXT,
    VENDOR_SIGN_IN_TEXT,
    VENDOR_SIGN_IN_URL,
} = LOGIN_STRINGS;

/**
 * Renders the Link URL for a User to Sign Up newly.
 * @constant
 */
const renderSignUpView = (
    <div className="sign-up-feature">
        <p>
            {SIGN_UP_TEXT}
            <Link to={SIGN_UP_URL}>{SIGN_UP_LINK_TEXT}</Link>
        </p>
    </div>
);

/**
 * Renders both the AntdForm Component and the social cards component.
 * @constant
 */
const renderSignInViews = (
    <div className="formContainer">
        <Card className="formCard">
            <Title className="blue-text form-title">{LOGIN_TITLE}</Title>
            <p>{LOGIN_TITLE_SUBTEXT}</p>
            <SigninForm />
            {renderSignUpView}
        </Card>
    </div>
);

/**
 * Renders the Link URL for a vendor to Sign In
 * @constant
 */
const renderVendorSignInView = (
    <div className="sign-up-feature">
        <p>
            {VENDOR_SIGN_IN_TEXT}
            <Link to={VENDOR_SIGN_IN_URL}>{VENDOR_SIGN_IN_LINK_TEXT}</Link>
        </p>
    </div>
);

/**
 * Exports the form component view
 *
 * @function
 */
export default function FormView() {
    return (
        <main className="sign-in-body">
            {renderSignInViews}
            {renderVendorSignInView}
        </main>
    );
}
