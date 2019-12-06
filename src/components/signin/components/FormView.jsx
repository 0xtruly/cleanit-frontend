import { Col, Row } from 'antd';

import React from 'react';
import Title from 'antd/lib/typography/Title';
import AntdForm from './AntdForm';
import { LOGIN_STRINGS } from '../constants';

const { LOGIN_TITLE, LOGIN_TITLE_SUBTEXT } = LOGIN_STRINGS;

/**
 * Exports the form component view
 *
 * @function
 */
export default function FormView() {
    return (
        <main className="sign-in-body">
            <Row type="flex" justify="center" className="hv-100">
                <Col span={22} className="h-100">
                    <Row type="flex" className="h-100" justify="center" align="middle">
                        <Col md={16} lg={10} className="form-holder" data-aos="fade">
                            <div className="form-header">
                                <Title className="blue-text form-title">{LOGIN_TITLE}</Title>
                                <p>{LOGIN_TITLE_SUBTEXT}</p>
                            </div>
                            <AntdForm />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </main>
    );
}

