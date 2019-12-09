/**
 * Exports meta tags strings
 *
 * @constant
 */
const contentString1 = 'We remain commited to helping you worry less about your laundry. ';
const contentString2 = 'Sign Up as a vendor now!';
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
    PAGE_TITLE: 'Vendor Sign Up',
    TITLE_TEMPLATE: '%s - CleanIT',
    TITLE_TEMPLATE_DEFAULT_TITLE: 'CleanIT',
};

/**
 * Exports Form element strings
 *
 * @constant
 */
export const LOGIN_STRINGS = {
    CTA_TEXT: 'Sign Up',
    LOGIN_TITLE: 'Ready to provide quality service?',
    LOGIN_TITLE_SUBTEXT: 'Please sign up to continue',
    SIGN_IN_LINK_TEXT: 'Sign in here',
    SIGN_IN_TEXT: 'Already have an account?',
    SIGN_IN_URL: '/vendor-sign-in',
    SOCIAL_TEXT: 'You can also sign up using social media to gain quick access',
    USER_SIGN_IN_LINK_TEXT: 'Sign in as a user here.',
    USER_SIGN_IN_TEXT: 'Here to experience the best services form providers? ',
    USER_SIGN_IN_URL: '/sign-in',
};

/**
 * Exports Form Input elements
 *
 * @constant
 */
export const FORM_INPUTS = [{
    iconColor: 'rgba(0,0,0,.25)',
    iconType: 'user',
    inputType: 'text',
    key: 'name',
    name: 'vendorName',
    placeholder: 'Your name',
}, {
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
