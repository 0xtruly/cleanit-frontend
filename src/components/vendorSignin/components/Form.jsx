import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button, Checkbox, Form, Input
} from 'antd';
import { formInputs, BUTTON_TEXT, LOGIN_STRINGS } from '../constants';
import * as actions from '../actions';

const { rememberMe, signInRequest } = actions;
const { REMEMBER_ME, FORGOT_PASSWORD, FORGOT_PASSWORD_ROUTE } = LOGIN_STRINGS;

function InputField() {
    return (
        <Input />
    );
}

/**
 * @function {fuction} dispatch
 */
function checkBox(dispatch) {
    return (
        <Checkbox onChange={e => dispatch(rememberMe(e.target.value))}>
            {REMEMBER_ME}
        </Checkbox>
    );
}

/**
 * @function {function} dispatch
 * @param {string} info
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
 * @param {string} info
 * @param {boolean} isSignedIn
 */
function FormCard(info) {
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
