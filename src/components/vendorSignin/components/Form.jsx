import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button, Checkbox, Form, Icon, Input
} from 'antd';
import { formInputs, BUTTON_TEXT, LOGIN_STRINGS } from '../constants';
import * as actions from '../actions';

const { listenForInput, rememberMe, signInRequest } = actions;
const { REMEMBER_ME, FORGOT_PASSWORD, FORGOT_PASSWORD_ROUTE } = LOGIN_STRINGS;

/**
 *
 * @param {object} input whose properties are used
 * to map through the input field
 */
function InputField(input) {
    const dispatch = useDispatch();
    const {
        iconColor, iconType, inputType, key, placeholder,
    } = input;
    const icon = <Icon type={iconType} style={{ color: iconColor }} />;
    return (
        <Input
            key={key}
            onBlur={e => dispatch(listenForInput({ key, value: e.target.value }))}
            placeholder={placeholder}
            prefix={icon}
            type={inputType}
            required
        />
    );
}

/**
 * 
 * @function {fuction} dispatch trigers the 'rememberMe' 
 * action when the checkbox is checked or unchecked.
 */
function checkBox(dispatch) {
    return (
        <Checkbox onChange={e => dispatch(rememberMe(e.target.value))}>
            {REMEMBER_ME}
        </Checkbox>
    );
}

/**
 * 
 * @function {function} dispatch trigers the signInRequest 
 * action on click
 * @param {string} info contains the state of 
 * email, name and phone number when an onChange
 * even occurs on the input field
 */
function signinButton(dispatch, info) {
    return (
        <Button
            className="button-p"
            onClick={() => dispatch(signInRequest(info))}
            type="primary"
        >
            {BUTTON_TEXT}
        </Button>
    );
}

function FormComponent(info) {
    const dispatch = useDispatch();
    return (
        <Form className="sign-form" layout="horizontal">
            {formInputs.map(input => (
                <Form.Item key={input.name}>{InputField(input)}</Form.Item>
            ))}
            <div>
                {checkBox(dispatch)}
                <Link to={FORGOT_PASSWORD_ROUTE}>{FORGOT_PASSWORD}</Link>
            </div>
            {signinButton(dispatch, info)}
        </Form>
    );
}

/**
 * 
 * @param {string} info 
 * @param {boolean} isSignedIn is set to true
 * when a user is successfully signed in and
 * false if otherwise.
 */
function FormCard(info, isSignedIn) {
    if (isSignedIn === true) {
        return <Redirect to="/dashboard" />;
    }
    return FormComponent(info);
}


function SigninForm() {
    const data = useSelector(state => state);
    const {
        vendorSignin: { email, password, isSignedIn },
    } = data;

    const info = { email, password };
    return FormCard(info, isSignedIn);
}

export default SigninForm;
