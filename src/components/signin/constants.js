/**
 * Exports meta tags strings
 *
 * @constant
 */
const META_TAGS = [
    { charset: 'utf-8' },
    {
        content: 'We remain commited to helping you worry less about your laundry. ',
        contentMore: 'Login to continue your stress-free laundry-happy life.',
        name: 'description',
    },
    {
        content: 'width=device-width, initial-scale=1',
        contentMore: '',
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
    EMAIL_PLACEHOLDER: 'Email Address',
    FORGOT_PASSWORD: 'Forgot password?',
    LOGIN_TITLE: 'Welcome back!',
    LOGIN_TITLE_SUBTEXT: 'Please sign in to continue',
    PASSWORD_PLACEHOLDER: 'Password',
    REMEMBER_ME: 'Remember me',
};
