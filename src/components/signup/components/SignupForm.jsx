/* eslint-disable react/jsx-no-literals */
import React from 'react';
import {
    Form, Input, Button, Card
} from 'antd';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';

/** This is the main component
 * for the form
*/

// eslint-disable-next-line max-lines-per-function
const SignupForm = () => {
    const { Item } = Form;
    return (
        <div className="formContainer" data-test="formContainer">
            <Card className="formCard">
                <h3> Welcome </h3>
                <p> Join as a User </p>
                <Form className="sign-form" layout="horizontal">
                    <Item>
                        <Input placeholder="Your Name" />
                    </Item>

                    <Item>
                        <Input placeholder="Email Address" />
                    </Item>

                    <Item>
                        <Input placeholder="Password" />
                    </Item>

                    <Item>
                        <Button type="primary" className="button-primary">Create Account</Button>
                    </Item>
                    <span className="signIn">
                        Already have an account?
                        <NavLink to="/">Sign in</NavLink>
                    </span>
                </Form>
            </Card>
            <Card className="socialsCard">
                <div className="text">
                    <p>Login using social media to gain quick access</p>
                    <img src={Logo} className="logo" alt="logo" />
                </div>
                <div className="btnSocial-facebook">
                    <Button type="primary" icon="facebook">
                        Signup with facebook
                    </Button>
                </div>
                <div className="btnSocial-google">
                    <Button type="danger" icon="google-plus">
                        Signup with google
                    </Button>
                </div>
            </Card>

        </div>
    );
};
export default SignupForm;
