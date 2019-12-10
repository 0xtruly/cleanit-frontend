import React from 'react';
import { Card } from 'antd';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, loginToFirebase } from '../../../firebase';
import { STRINGS } from '../constants';

const { LOGIN, LOGO } = STRINGS;

export const SocialCard = () => (
    <Card className="socialsCard">
        <div className="text">
            <p>{LOGIN}</p>
            <img src={LOGO} className="logo" alt="logo" />
        </div>
        <div className="social">
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={loginToFirebase.auth()}
            />
        </div>
    </Card>
);
