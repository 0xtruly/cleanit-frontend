import { Col, Row } from 'antd';

import React from 'react';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
import AntdForm from './AntdForm';
import { LOGIN_STRINGS } from '../constants';
import SocialCard from './SocialCard';

const {
    LOGIN_TITLE, LOGIN_TITLE_SUBTEXT, SIGN_UP_TEXT, SIGN_UP_LINK_TEXT, SIGN_UP_URL,
} = LOGIN_STRINGS;

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
 *
 * @constant
 */
const renderSignInViews = (
    <Row type="flex">
        <Col md={14} xs={24}>
            <div className="form-header">
                <Title className="blue-text form-title">{LOGIN_TITLE}</Title>
                <p>{LOGIN_TITLE_SUBTEXT}</p>
            </div>
            <AntdForm />
            {renderSignUpView}
        </Col>
        <Col md={10} xs={24} className="social-card">
            <SocialCard />
        </Col>
    </Row>
);

/**
 * Exports the form component view
 *
 * @function
 */
export default function FormView() {
    return (
        <main className="sign-in-body">
            <Row type="flex" justify="center" className="hv-100">
                <Col span={21} className="h-100">
                    <Row type="flex" className="h-100" justify="center" align="middle">
                        <Col md={22} lg={14} className="form-holder" data-aos="fade">
                            {renderSignInViews}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </main>
    );
}

