import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox
} from 'antd';

import { Link } from 'react-router-dom';
import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { FORM_INPUTS, BUTTON_TEXT, LOGIN_STRINGS } from '../constants';
import { actionTypes } from '../actionTypes';

const { REMEMBER_ME, FORGOT_PASSWORD, FORGOT_PASSWORD_ROUTE } = LOGIN_STRINGS;

const { LOGIN_REQUEST, INPUT_LISTEN, REMEMBER_USER } = actionTypes;

/**
 * Renders the Input fields.
 * @function
 *
 * @param {*} item - item constant containing input strings and data
 * @param {*} dispatch - useDispatch from react-redux.
 */
function input(item, dispatch) {
    const { key } = item;
    const icon = <Icon type={item.iconType} style={{ color: item.iconColor }} />;
    return (
        <Input
            allowClear
            onBlur={e => dispatch({
                payload: { key, value: e.target.value },
                type: INPUT_LISTEN,
            })}
            key={item.key}
            type={item.inputType}
            prefix={(icon)}
            placeholder={item.placeholder}
            required
        />
    );
}

function checkBox(dispatch) {
    return (
        <Checkbox onChange={e => dispatch({
            payload: e.target.checked,
            type: REMEMBER_USER,
        })}
        >
            {REMEMBER_ME}
        </Checkbox>
    );
}

/**
 * @function
 * @param {function} handleChange - passing in the handleChange function for the onChange event.
 *
 * Rendering the Form.Item UI from the Ant Library
 */
function formItem(dispatch, handleSubmit) {
    return (
        <Form onSubmit={handleSubmit} className="login-form">
            {FORM_INPUTS.map(item => (
                <Form.Item key={item.name}>
                    {input(item, dispatch)}
                </Form.Item>
            ))}
            <div className="remember-me">
                {checkBox(dispatch)}
                <Link to={FORGOT_PASSWORD_ROUTE}>{FORGOT_PASSWORD}</Link>
            </div>
            <Button htmlType="submit" className="btn-sign-in">
                {BUTTON_TEXT}
            </Button>
        </Form>
    );
}

/**
 * Renders the entire form view component
 *
 * @function
 */
function SignInForm() {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const { signIn: { email, password } } = data;
    const user = { email, password };

    /**
    * @function
    * @param {event} e - Listening for an event
    */
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ payload: user, type: LOGIN_REQUEST });
    }

    return (
        formItem(dispatch, handleSubmit)
    );
}

SignInForm.propTypes = {
    form: PropTypes.objectOf(PropTypes.func).isRequired,
};

const AntdForm = Form.create({ name: 'sign_in_form' })(SignInForm);

export default AntdForm;
