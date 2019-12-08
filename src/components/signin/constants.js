import Logo from './components/images/placeholder-logo.svg';

export const BRAND_LOGO = Logo;

export const BRAND_ALT_TEXT = 'CleanIT On-Demand Laundry Service logo';

/**
 * Exports meta tags strings
 *
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
    }];

/**
 * Exports React Helmet related  Strings
 *
 * @constant
 */
export const HELMET_STRINGS = {
    CANON_LINK: 'http://mysite.com/example',
    META_TAGS,
    PAGE_TITLE: 'Sign In',
    TITLE_TEMPLATE: '%s - CleanIT',
    TITLE_TEMPLATE_DEFAULT_TITLE: 'CleanIT',
};

/**
 * Exports Form element strings
 *
 * @constant
 */
export const LOGIN_STRINGS = {
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
    VENDOR_SIGN_IN_LINK_TEXT: 'Sign in as a vendor here.',
    VENDOR_SIGN_IN_TEXT: 'Here to provide a service? ',
    VENDOR_SIGN_IN_URL: '/vendor-sign-in',
};

/**
 * Exports Form Input elements
 *
 * @constant
 */
export const FORM_INPUTS = [{
    iconColor: 'rgba(0,0,0,.25)',
    iconType: 'mail',
    inputType: 'email',
    key: 'email',
    name: 'userEmail',
    placeholder: 'Email address',
}, {
    iconColor: 'rgba(0,0,0,.25)',
    iconType: 'lock',
    inputType: 'password',
    key: 'password',
    name: 'userPassword',
    placeholder: 'Password',
}];

export const BUTTON_TEXT = 'Sign In';
