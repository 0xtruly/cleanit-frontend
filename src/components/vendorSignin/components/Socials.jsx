import React from 'react';
import { Card } from 'antd';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, loginToFirebase } from '../../../firebase';
import { LOGIN_STRINGS } from '../constants';

const { BRAND_ALT_TEXT, BRAND_LOGO, SOCIAL_TEXT } = LOGIN_STRINGS;

export default function SocialCard() {
    return (
        <Card className="socialsCard">
            <div className="text">
                <p>{SOCIAL_TEXT}</p>
                <img src={BRAND_LOGO} alt={BRAND_ALT_TEXT} className="logo" />
            </div>
            <div className="social">
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={loginToFirebase.auth()}
                />
            </div>
        </Card>
    );
}
