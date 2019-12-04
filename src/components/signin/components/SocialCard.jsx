import React from 'react';
import { LOGIN_STRINGS, BRAND_ALT_TEXT, BRAND_LOGO } from '../constants';

const { SOCIAL_TEXT } = LOGIN_STRINGS;

export default function SocialCard() {
    return (
        <div className="social-card-container">
            <p className="social-title">
                {SOCIAL_TEXT}
            </p>
            <p className="social-title has-image">
                <img src={BRAND_LOGO} alt={BRAND_ALT_TEXT} />
            </p>
            <div id="social-card-auth-container" />
        </div>
    );
}
