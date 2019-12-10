import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, loginToFirebase } from '../../../firebase';
import { LOGIN_STRINGS } from '../constants';

const { SOCIAL_TEXT } = LOGIN_STRINGS;

export default function SocialCard() {
    return (
        <div className="social-card-container">
            <p className="social-title">
                {SOCIAL_TEXT}
            </p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={loginToFirebase.auth()} />
        </div>
    );
}
