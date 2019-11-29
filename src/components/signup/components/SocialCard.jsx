import React from 'react';
import { Button, Card } from 'antd';
import { STRINGS, socialButton } from '../constants';

const { LOGIN, LOGO } = STRINGS;

export const SocialCard = () => (
    <Card className="socialsCard">
        <div className="text">
            <p>{LOGIN}</p>
            <img src={LOGO} className="logo" alt="logo" />
        </div>
        {socialButton.map(button => {
            const {
                className, icon, key, text, type,
            } = button;
            return (
                <div key={key} className={className}>
                    <Button type={type} icon={icon}>
                        {text}
                    </Button>
                </div>
            );
        })}
    </Card>
);
