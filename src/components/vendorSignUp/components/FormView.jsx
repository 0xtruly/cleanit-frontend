import {
    Form,
    Icon,
    Input,
    Button
} from 'antd';
import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { FORM_INPUTS, BUTTON_TEXT } from '../constants';
import { actionTypes } from '../actionTypes';

const { SIGNUP_REQUEST, INPUT_LISTEN } = actionTypes;

/**
* Renders the Input fields.
* @function
*
* @param {*} item - item constant containing input strings and data
* @param {*} dispatch - useDispatch from react-redux.
*/
function input(item, dispatch) {
    const {
        key, iconType, iconColor, inputType, placeholder,
    } = item;
    const icon = <Icon type={iconType} style={{ color: iconColor }} />;
    return (
        <Input
            allowClear
            onBlur={e => dispatch({
                payload: { key, value: e.target.value },
                type: INPUT_LISTEN,
            })}
            key={key}
            type={inputType}
            prefix={(icon)}
            placeholder={placeholder}
            required
        />
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
function SignUpForm() {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const { vendorSignUp: { email, password } } = data;
    const vendor = { email, password };

    /**
  * @function
  * @param {event} e - Listening for an event
  */
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ payload: vendor, type: SIGNUP_REQUEST });
    }

    return (
        formItem(dispatch, handleSubmit)
    );
}

SignUpForm.propTypes = {
    form: PropTypes.objectOf(PropTypes.func).isRequired,
};

const FormView = Form.create({ name: 'sign_in_form' })(SignUpForm);

export default FormView;
