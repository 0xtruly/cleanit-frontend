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
import { LOGIN_REQUEST, INPUT_LISTEN } from '../actionTypes';

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
function SignInForm() {
    // const [user, setUser] = useState({ email: '', userpassword: '' });
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
