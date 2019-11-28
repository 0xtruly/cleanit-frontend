import React from 'react';
import { Button, Card } from 'antd';
import { STRINGS, socialButton } from '../constants';
import Logo from '../../../assets/logo.svg';

const { LOGIN } = STRINGS;

export const SocialCard = () => (
    <Card className="socialsCard">
        <div className="text">
            <p>{LOGIN}</p>
            <img src={Logo} className="logo" alt="logo" />
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
