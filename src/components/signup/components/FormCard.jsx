import React from 'react';
import { Form, Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { STRINGS, formInputs } from '../constants';

const { ALREADY, CREATE_ACCOUNT, SIGNIN } = STRINGS;
export const FormCard = () => (
    <Form className="sign-form" layout="horizontal">
        <Form.Item>
            {formInputs.map(input => {
                const { inputType, key, placeholder } = input;
                return (
                    <Input key={key} placeholder={placeholder} type={inputType} />
                );
            })}
        </Form.Item>
        <Form.Item><Button type="primary" className="button-p">{CREATE_ACCOUNT}</Button></Form.Item>
        <span className="signIn">
            {ALREADY}
            <NavLink to="/">{SIGNIN}</NavLink>
        </span>
    </Form>
);
