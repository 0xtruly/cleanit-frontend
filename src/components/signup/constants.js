
const logoSuffix1 = 'cleanit-7147d.appspot.com/o/logo.svg';
const logoSuffix2 = 'media&token=f8fed921-a485-4cb8-81e4-23069b98f801';

export const STRINGS = {
    ALREADY: 'Already have an account?',
    CREATE_ACCOUNT: 'Create Account',
    JOIN: 'Join as a User',
    LOGIN: 'Login using social media to gain quick access',
    LOGO: `https://firebasestorage.googleapis.com/v0/b/${logoSuffix1}?alt=${logoSuffix2}`,
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
