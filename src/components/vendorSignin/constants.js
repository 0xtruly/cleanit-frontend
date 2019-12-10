const logoSuffix1 = 'cleanit-7147d.appspot.com/o/logo.svg';
const logoSuffix2 = 'media&token=f8fed921-a485-4cb8-81e4-23069b98f801';

/**
 * export meta tag strings
 * @constant
 */
const contentString1 = 'We remain commited to helping you worry less about your laundry. ';
const contentString2 = 'Login to continue your stress-free laundry-happy life.';
const META_TAGS = [
    {
        content: `${contentString1}${contentString2}`,
        name: 'description',
    },
    {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
    },
];

export const HELMET_STRINGS = {
    CANON_LINK: 'http://mysite.com/example',
    META_TAGS,
    PAGE_TITLE: 'Vendor Sign In',
    TITLE_TEMPLATE: '%s - CleanIT',
    TITLE_TEMPLATE_DEFAULT_TITLE: 'CleanIT',
};

/**
 * Exports Form element strings
 *
 * @constant
 */
export const LOGIN_STRINGS = {
    BRAND_ALT_TEXT: 'CleanIT On-Demand Laundry Service logo',
    BRAND_LOGO: `https://firebasestorage.googleapis.com/v0/b/${logoSuffix1}?alt=${logoSuffix2}`,
    CTA_TEXT: 'Sign In',
    FORGOT_PASSWORD: 'Forgot password?',
    FORGOT_PASSWORD_ROUTE: '/',
    LOGIN_TITLE: 'Welcome back!',
    LOGIN_TITLE_SUBTEXT: 'Please sign in to continue',
    REMEMBER_ME: 'Remember me',
    SIGN_UP_LINK_TEXT: 'Sign Up here',
    SIGN_UP_TEXT: "Don't have an account yet? ",
    SIGN_UP_URL: '/sign-up',
    SOCIAL_TEXT: 'You can also sign in using social media to gain quick access',
    VENDOR_SIGN_IN_LINK_TEXT: 'Sign in as a user here.',
    VENDOR_SIGN_IN_TEXT: 'Here to request a service? ',
    VENDOR_SIGN_IN_URL: '/vendor-sign-in',
};

/**
 * Exports Form Input elements
 *
 * @constant
 */
export const formInputs = [
    {
        iconColor: 'rgba(0,0,0,.25)',
        iconType: 'mail',
        inputType: 'email',
        key: 'email',
        name: 'userEmail',
        placeholder: 'Email address',
    },
    {
        iconColor: 'rgba(0,0,0,.25)',
        iconType: 'lock',
        inputType: 'password',
        key: 'password',
        name: 'userPassword',
        placeholder: 'Password',
    },
];

export const BUTTON_TEXT = 'Sign In';
