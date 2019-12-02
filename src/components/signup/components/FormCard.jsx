import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { STRINGS, formInputs } from '../constants';
import actionTypes from '../actionTypes';

const { ALREADY, CREATE_ACCOUNT, SIGNIN } = STRINGS;
const { GET_INPUT, REGISTER_WITH_EMAIL } = actionTypes;

/**
 *
 * @param {*} key input value identified by a key
 * @param {*} dispatch an action type GET_INPUT
 * and pass the value from the key press event
 * to payload
 * @param {*} placeholder for each input field
 * @param {*} inputType signifies the type for each input field
 */

function InputField(key, dispatch, placeholder, inputType) {
    return (
        <Input
            key={key}
            onChange={e => dispatch({ payload: { key, value: e.target.value }, type: GET_INPUT })}
            placeholder={placeholder}
            type={inputType}
        />
    );
}

/**
 *
 * @param {*} dispatch an action type GET_INPUT
 * and pass the value from the key press event
 * to payload
 * The FormInput component is passed unto
 * FormItemInput
 */

function FormItemInput(dispatch) {
    return (
        <Form.Item>
            {formInputs.map(input => {
                const { inputType, key, placeholder } = input;
                return (
                    InputField(key, dispatch, placeholder, inputType)
                );
            })}
        </Form.Item>
    );
}

/**
 *
 * @param {*} dispatch an action type REGISTER_WITH_EMAIL
 * @param {*} info is a variable assigned to value
 * of email, name and password in state
 */

function FormButton(dispatch, info) {
    return (
        <Form.Item>
            <Button
                className="button-p"
                onClick={() => dispatch({ payload: info, type: REGISTER_WITH_EMAIL })}
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
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const { signup: { name, email, password } } = data;
    const info = { email, name, password };
    return (
        <Form className="sign-form" layout="horizontal">
            {FormItemInput(dispatch)}
            {FormButton(dispatch, info)}
            <span className="signIn">
                {ALREADY}
                <NavLink to="/">{SIGNIN}</NavLink>
            </span>
        </Form>
    );
}
