import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { STRINGS, formInputs } from '../constants';
import * as actions from '../actions';

const { ALREADY, CREATE_ACCOUNT, SIGNIN } = STRINGS;
const { getInput, registerWithEmail } = actions;

/**
 *
 * @param {string} key input value identified by a key
 * @param {function} dispatch an action type GET_INPUT
 * and pass the value from the key press event
 * to payload
 * @param {string} placeholder for each input field
 * @param {string} inputType signifies the type for each input field
 */

function InputField(key, placeholder, inputType) {
    const dispatch = useDispatch();
    return (
        <Input
            key={key}
            onChange={e => dispatch(getInput({ key, value: e.target.value }))}
            placeholder={placeholder}
            type={inputType}
        />
    );
}

/**
 *
 * @param {function} dispatch an action type GET_INPUT
 * and pass the value from the key press event
 * to payload
 * The FormInput component is passed unto
 * FormItemInput
 */

function FormItemInput() {
    return (
        <Form.Item>
            {formInputs.map(input => {
                const { inputType, key, placeholder } = input;
                return InputField(key, placeholder, inputType);
            })}
        </Form.Item>
    );
}

/**
 *
 * @param {function} dispatch an action type REGISTER_WITH_EMAIL
 * @param {object} info is a variable assigned to value
 * of email, name and password in state
 */

function FormButton() {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const {
        signup: { name, email, password },
    } = data;
    const info = { email, name, password };
    return (
        <Form.Item>
            <Button
                className="button-p"
                onClick={() => dispatch(registerWithEmail(info))}
                type="primary"
            >
                {CREATE_ACCOUNT}
            </Button>
        </Form.Item>
    );
}

/**
 *This is the main FormCard function
 */
export function FormCard() {
    return (
        <Form className="sign-form" layout="horizontal">
            {FormItemInput()}
            {FormButton()}
            <span className="signIn">
                {ALREADY}
                <NavLink to="/">{SIGNIN}</NavLink>
            </span>
        </Form>
    );
}
