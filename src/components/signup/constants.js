
import Logo from './images/logo.svg';

export const STRINGS = {
    ALREADY: 'Already have an account?',
    CREATE_ACCOUNT: 'Create Account',
    JOIN: 'Join as a User',
    LOGIN: 'Login using social media to gain quick access',
    LOGO: Logo,
    SIGNIN: 'Sign in',
    SIGNUP_ENDPOINT: 'https://us-central1-cleanit-7147d.cloudfunctions.net/app/api/v1/auth/',
    USER: 'user',
    VENDOR: 'vendor',
    WELCOME: 'Welcome',
};

export const formInputs = [

    {
        className: '',
        id: 'userName',
        inputType: 'text',
        key: 'name',
        placeholder: 'Your Name',
        rules: {
            message: 'please input your name',
            required: true,
        },
    },

    {
        className: '',
        id: 'email',
        inputType: 'email',
        key: 'email',
        placeholder: 'Email Address',
        rules: {
            message: 'please input email address',
            required: true,
        },
    },

    {
        className: '',
        id: 'password',
        inputType: 'password',
        key: 'password',
        placeholder: 'Password',
        rules: {
            message: 'please input password',
            required: true,
        },
    },
];

export const socialButton = [
    {
        className: 'btnSocial-facebook',
        icon: 'facebook',
        key: 'facebookBtn',
        text: 'Signup with facebook',
        type: 'primary',
    },
    {
        className: 'btnSocial-google',
        icon: 'google-plus',
        key: 'googleBtn',
        text: 'Signup with google',
        type: 'danger',
    },
];
